import type { Dict } from '~/i18n/types';
import { en } from '~/i18n/strings/en';
import { zh } from '~/i18n/strings/zh';
import { ja } from '~/i18n/strings/ja';
import { ko } from '~/i18n/strings/ko';
import { es } from '~/i18n/strings/es';
import { de } from '~/i18n/strings/de';
import type { Locale } from '~/i18n/config';

export { locales, defaultLocale, localeNames, hreflang, localePath } from '~/i18n/config';
export type { Locale } from '~/i18n/config';
export type { Dict } from '~/i18n/types';

export const dictionaries: Record<Locale, Dict> = { en, zh, ja, ko, es, de };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
