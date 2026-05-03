---
name: marketing-site-i18n
description: Use when adding multi-language support to a marketing site under /Users/shark/workspace/<App>-site/. Defines the locale list, dictionary architecture, routing pattern, hreflang, language switcher, and sitemap generation that all sister sites in this workspace share. Default locale set is en, zh, ja, ko, es, de — six languages cover ~70%+ of global app-store install volume.
---

# Marketing site i18n — workspace standard

## Default locale set

Every app marketing site in this workspace ships with these six
languages on day one:

| Code | Language | hreflang | Notes |
|------|----------|----------|-------|
| en   | English  | `en`     | Default, lives at `/` |
| zh   | Chinese (Simplified) | `zh-Hans` | Add `zh-Hant` only if Asia-pacific traction warrants |
| ja   | Japanese | `ja`     | Polite ですます form |
| ko   | Korean   | `ko`     | Formal-polite 합니다/입니다 |
| es   | Spanish  | `es`     | Use tú (Apple Spanish convention, works globally) |
| de   | German   | `de`     | Use du (Apple German convention) |

This covers ~70%+ of global iOS install volume. Add more (fr, pt-BR, it,
ar) only when usage data shows demand.

## Astro i18n config (canonical)

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ja', 'ko', 'es', 'de'],
  routing: {
    prefixDefaultLocale: false,   // English at /, others at /<lang>/
  },
}
```

## Directory layout

```
src/i18n/
  config.ts                # locales array, defaultLocale, hreflang map, localePath()
  types.ts                 # `Dict` interface — the canonical shape
  index.ts                 # re-exports + `dictionaries` registry + getDict(locale)
  strings/
    en.ts                  # canonical source — write English first
    zh.ts
    ja.ts
    ko.ts
    es.ts
    de.ts
```

## `Dict` interface principles

- Every translatable string has a key. No string literals in components.
- Key names describe the **section + role** (`hero.titleA`,
  `faq.outroEmail`), not the English content.
- Use arrays (`steps[]`, `items[]`) for repeated structures. Translators
  fill in the same number of items.
- For inline HTML (e.g. `<strong>` inside a sentence), accept HTML in
  the value and render with `set:html`. Document this so translators
  know which keys are HTML.
- Privacy policy gets its own nested `privacyPage` subtree because it's
  long-form and structurally different.

## Routing pattern

```
src/pages/
  index.astro              # English home (default locale, no prefix)
  privacy.astro            # English privacy
  404.astro
  [lang]/
    index.astro            # zh/ja/ko/es/de homes via getStaticPaths
    privacy.astro          # zh/ja/ko/es/de privacy via getStaticPaths
  sitemap.xml.ts           # TS endpoint that emits hreflang alternates
```

Both English pages and `[lang]/` pages call the **same components** with
their respective `t` (Dict) and `lang` props — no duplicated markup.

```ts
// src/pages/[lang]/index.astro
export async function getStaticPaths() {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((lang) => ({ params: { lang }, props: { lang } }));
}
```

## Component contract

Every component that contains user-facing text takes `t: Dict` (and
`lang: Locale` if it needs to build cross-locale URLs):

```astro
---
import type { Dict, Locale } from '~/i18n';
interface Props { t: Dict; lang?: Locale; }
const { t, lang } = Astro.props;
---
<h1>{t.hero.titleA}</h1>
```

## Cross-locale URLs

```ts
// src/i18n/config.ts
export function localePath(locale: Locale, page: '' | 'privacy' = '') {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (page === '') return prefix === '' ? '/' : prefix;
  return `${prefix}/${page}`;
}
```

Use `localePath(lang, 'privacy')` instead of hand-building `/zh/privacy`
strings — it stays correct if the default locale changes.

## Language switcher

Plain `<select>` with an inline `onchange` handler that does
`window.location.href = this.value`. Reasons:
- Zero JS framework dependency
- Works without JS (degrades to a list of options the user can read)
- Native OS-styled dropdown (familiar on every device)
- Accessible by default (`<label>` + `aria-label`)

```astro
<select onchange="if(this.value){window.location.href=this.value}">
  {locales.map((loc) => (
    <option value={localePath(loc, page)} selected={loc === lang}>
      {localeNames[loc]}
    </option>
  ))}
</select>
```

## hreflang in `<head>` (Base layout)

Generate one `<link rel="alternate" hreflang="…" href="…">` per locale,
plus `x-default` pointing to the default locale. Never omit
`x-default` — Google uses it as the fallback for unmatched locales.

## Sitemap with xhtml:link alternates

`/sitemap.xml` should be a TypeScript endpoint
(`src/pages/sitemap.xml.ts`), not a static file. For each URL it emits
`<xhtml:link rel="alternate" hreflang="…" href="…"/>` rows for every
locale. This is what Google reads to learn the locale variants exist.

## Translation voice rules

- **Don't translate brand names**: "RepZen" stays "RepZen" in every
  language. "Apple Watch" / "iPhone" stay in English (Apple's own
  convention in their localized marketing).
- **Match the source's cadence**: if the English is short and
  declarative, the Chinese should be too. Don't lengthen for "natural"
  phrasing — Apple-style cadence works in every language.
- **Privacy translations carry an "English is authoritative" notice**:
  legal interpretation defers to English. Add a small notice at the top
  of translated privacy pages.
- **Never machine-translate from the dictionary**: read the source,
  understand the intent, write the target language with the same intent.
  Ask the user if a key is ambiguous.

## E2E test coverage

Every locale gets the same smoke test (see marketing-site-e2e skill):
- HTML `lang` attribute matches BCP47 code
- Title and hero contain expected translated phrase
- Hreflang count = locales + 1 (`x-default`)
- Canonical URL has correct locale prefix
- Language switcher pre-selects current locale

## Adding a 7th language later

1. Add the code to `locales` in `src/i18n/config.ts` and `hreflang`
   map.
2. Add `localeNames[code]` for the switcher label.
3. Create `src/i18n/strings/<code>.ts` from the en.ts shape.
4. Wire it into `dictionaries` in `src/i18n/index.ts`.
5. Add a test row to `tests/e2e/locales.spec.ts`.

That's it — pages, sitemap, hreflang, switcher all auto-pick it up.
