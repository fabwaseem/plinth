// Build localized README files from template.md + strings.mjs.
//
//   README.md                         <- en (canonical, repo root)
//   i18n/readme/README.{code}.md      <- one per non-en locale
//
// Usage: `node readme-src/build.mjs` (or `bun run build:readme`).

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { LOCALES } from "./strings.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");
const TEMPLATE_PATH = resolve(HERE, "template.md");
const TRANSLATION_DIR = "i18n/readme";

// The "Last updated" stamp is derived, never hand-written. Each README keeps the
// date of the last build that actually changed its content: the freshly rendered
// text carries STAMP_TOKEN where the date goes, and the file already on disk is
// normalized the same way before comparison. Equal content -> reuse the old date,
// so `bun run check` (which rebuilds every README) never churns the working tree.
const STAMP_TOKEN = "__PLINTH_LAST_UPDATED__";
const STAMP_SENTINEL = `_Last updated: ${STAMP_TOKEN}._`;
const STAMP_RE = /_Last updated: ([^_]*)\._/;

function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

// Returns the date to stamp plus whether it moved, given the previous file (if any).
function resolveStamp(rendered, previous) {
  const prevDate = previous?.match(STAMP_RE)?.[1];
  if (previous && prevDate) {
    const prevNormalized = previous.replace(STAMP_RE, STAMP_SENTINEL);
    if (prevNormalized === rendered) return { date: prevDate, changed: false };
  }
  return { date: todayUtc(), changed: true };
}

// Reports drift per non-en locale. In strict mode any drift throws; otherwise
// missing/extra keys for non-en locales are warnings — the build falls back
// to en for missing keys and ignores extras. The en locale is always
// validated as the source of truth (never tolerated to drift).
function checkParity(locales, { strict }) {
  const en = locales.find((l) => l.code === "en");
  if (!en) throw new Error("English locale missing from registry");
  const enKeys = Object.keys(en.strings).sort();
  const enKeySet = new Set(enKeys);
  let driftCount = 0;
  for (const loc of locales) {
    if (loc.code === "en") continue;
    const keys = Object.keys(loc.strings).sort();
    const keySet = new Set(keys);
    const missing = enKeys.filter((k) => !keySet.has(k));
    const extra = keys.filter((k) => !enKeySet.has(k));
    if (!missing.length && !extra.length) continue;
    driftCount++;
    const parts = [];
    if (missing.length) parts.push(`missing: ${missing.join(", ")}`);
    if (extra.length) parts.push(`extra: ${extra.join(", ")}`);
    const msg = `Locale "${loc.code}" key drift — ${parts.join("; ")}`;
    if (strict) throw new Error(msg);
    console.warn(`  ⚠ ${msg}`);
  }
  if (driftCount && !strict) {
    console.warn(
      `\n  ⚠ ${driftCount} locale(s) drift from en. Build continued with en fallback for missing keys; extras ignored.`,
    );
    console.warn(
      `  Run \`bun run check:readme\` (or \`bun readme-src/build.mjs --strict\`) before pushing to fail on drift.\n`,
    );
  }
}

function translationFilename(locale) {
  return `README.${locale.code}.md`;
}

function readmeHref(from, to) {
  if (from.code === "en") return `${TRANSLATION_DIR}/${translationFilename(to)}`;
  if (to.code === "en") return "../../README.md";
  return translationFilename(to);
}

function buildLangNav(currentLoc, locales) {
  return locales
    .map((l) => {
      if (l.code === currentLoc.code) return `**${l.name}**`;
      return `[${l.name}](${readmeHref(currentLoc, l)})`;
    })
    .join(" · ");
}

// Translated READMEs live two directories below the repo root, so root-relative
// assets and the donate page have to climb back up. English stays at the root.
function relocateTranslationAssets(markdown) {
  return markdown
    .replaceAll('src="src/', 'src="../../src/')
    .replaceAll('src="build/', 'src="../../build/')
    .replaceAll('srcset="build/', 'srcset="../../build/');
}

function placeDonateLinks(markdown, locale) {
  const href = locale.code === "en" ? "docs/DONATE.md" : "../../docs/DONATE.md";
  return markdown.replaceAll("](DONATE.md)", `](${href})`).replaceAll('href="DONATE.md"', `href="${href}"`).replaceAll('href="docs/DONATE.md"', `href="${href}"`);
}

function outputPath(locale) {
  return resolve(ROOT, locale.filename);
}

function buildLangNameList(locales) {
  return locales.map((l) => l.name).join(" · ");
}

function applyStrings(template, strings, fallback = {}) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (key in strings) return strings[key];
    if (key in fallback) return fallback[key];
    return match;
  });
}

function applyMacros(text, macros) {
  for (const [key, val] of Object.entries(macros)) {
    text = text.replaceAll(`{{${key}}}`, val);
  }
  return text;
}

async function main() {
  const strict = process.argv.includes("--strict");
  checkParity(LOCALES, { strict });

  const template = await readFile(TEMPLATE_PATH, "utf8");
  const en = LOCALES.find((l) => l.code === "en");
  const enStrings = en?.strings ?? {};

  for (const loc of LOCALES) {
    let md = applyStrings(template, loc.strings, enStrings);
    md = applyMacros(md, {
      LANG_NAV: buildLangNav(loc, LOCALES),
      LANG_COUNT: String(LOCALES.length),
      LANG_NAME_LIST: buildLangNameList(LOCALES),
      LAST_UPDATED: STAMP_TOKEN,
    });
    md = md.replace(/\n{3,}/g, "\n\n");
    md = placeDonateLinks(md, loc);
    if (loc.code !== "en") md = relocateTranslationAssets(md);

    const outPath = outputPath(loc);
    await mkdir(dirname(outPath), { recursive: true });
    const previous = await readFile(outPath, "utf8").catch(() => null);
    const { date, changed } = resolveStamp(md, previous);
    await writeFile(outPath, md.replace(STAMP_SENTINEL, `_Last updated: ${date}._`), "utf8");
    console.log(`  ✓ ${loc.code.padEnd(5)} → ${loc.filename.padEnd(32)} ${date}${changed ? " (updated)" : ""}`);
  }

  await Promise.all(
    LOCALES.filter((loc) => loc.code !== "en").map((loc) => rm(resolve(ROOT, `README.${loc.code}.md`), { force: true })),
  );

  console.log(`\nBuilt ${LOCALES.length} READMEs.${strict ? " (strict)" : ""}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
