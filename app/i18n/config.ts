export const locales = ["en", "uk", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const storageKey = "locale";
