import { useLoaderData, useLocation, useNavigate } from "react-router";
import cfg from "./config";

// TYPES

export type Locale = (typeof cfg.locales)[number];
export type Dict = Record<string, string>;

export type I18nConfig = {
  locales: string[];
  defaultLocale: string;
};

export type loaderResult = {
  locale: Locale;
  t: Dict;
};

export type useLocaleValue = {};

// UTILS

function isLocale(v?: string): v is Locale {
  return !!v && cfg.locales.includes(v);
}

function buildPath(locale: Locale, to: string) {
  if (!to.startsWith("/")) to = "/" + to;
  return `/${locale}${to}`;
}

// LOADER

async function loadDict(locale: string, namespaces: string[]): Promise<Dict> {
  const results = await Promise.all(
    namespaces.map((ns) => import(`./translations/${locale}/${ns}.json`)),
  );

  return Object.assign({}, ...results.map((m) => m.default));
}

export async function loadLocale(
  params: Record<string, string | undefined>,
  namespaces: string[] | string,
): Promise<loaderResult> {
  const locale = isLocale(params.lang) ? params.lang : cfg.defaultLocale;
  const nsArray = typeof namespaces === "string" ? [namespaces] : namespaces;
  const t = await loadDict(locale, nsArray);

  return { locale, t };
}

// HOOK

export function useLocale() {
  const { locale, t } = useLoaderData() as loaderResult;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const l = (to: string) => buildPath(locale, to);

  const switchLocale = (newLocale: Locale) => {
    navigate(pathname.replace(locale, newLocale));
  };

  return { locale, t, l, switchLocale };
}
