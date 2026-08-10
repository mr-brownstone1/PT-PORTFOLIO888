export type Locale = "en" | "th";

export const LOCALES: Locale[] = ["en", "th"];

export const LOCALE_STORAGE_KEY = "sppux-locale";

export type Localized<T = string> = { en: T; th: T };

export function pickLocale<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value.en;
}

export function asLocalized(
  en: string,
  th: string
): Localized<string> {
  return { en, th };
}
