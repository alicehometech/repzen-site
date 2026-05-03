export const locales = ['en', 'zh', 'ja', 'ko', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
  de: 'Deutsch',
};

// hreflang values per BCP 47
export const hreflang: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
  es: 'es',
  de: 'de',
};

/** Build a path for a given locale + page slug.
 *  page is "" (home) or "privacy". Default locale lives at root. */
export function localePath(locale: Locale, page: '' | 'privacy' = ''): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (page === '') return prefix === '' ? '/' : prefix;
  return `${prefix}/${page}`;
}
