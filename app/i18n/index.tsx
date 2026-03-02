import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { locales, defaultLocale, storageKey, type Locale } from "./config";

// TYPES

type Dict = Record<string, string>;

type I18nContextValue = {
  t: Dict;
  locale: Locale;
  setLocale: (l: Locale) => void;
  setNamespace: (ns: string | null) => void;
};

// UTILS

function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const saved = localStorage.getItem(storageKey) as Locale | null;
  if (saved && locales.includes(saved)) return saved;

  const nav = navigator.language.slice(0, 2) as Locale;
  if (nav && locales.includes(nav)) return nav;

  return defaultLocale;
}

async function importNamespace(
  locale: Locale,
  namespace: string,
): Promise<Dict> {
  const module = await import(`./translations/${locale}/${namespace}.json`);
  return module.default;
}

// CONTEXT

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());
  const [namespace, setNamespace] = useState<string | null>(null);

  const [common, setCommon] = useState<Dict>({});
  const [page, setPage] = useState<Dict>({});
  const [t, setT] = useState<Dict>({});

  // cache: "en:common" → dict
  const cacheRef = useRef<Record<string, Dict>>({});

  // helper
  const load = async (loc: Locale, ns: string) => {
    const key = `${loc}:${ns}`;

    if (cacheRef.current[key]) return cacheRef.current[key];

    const dict = await importNamespace(loc, ns);
    cacheRef.current[key] = dict;
    return dict;
  };

  // locale change (или первый mount)
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const commonDict = await load(locale, "common");
      if (cancelled) return;

      setCommon(commonDict);

      let pageDict: Dict = {};

      if (namespace) {
        pageDict = await load(locale, namespace);
        if (cancelled) return;
      }

      setPage(pageDict);
      setT({ ...commonDict, ...pageDict });
    })();

    localStorage.setItem(storageKey, locale);

    return () => {
      cancelled = true;
    };
  }, [locale]);

  // namespace change
  useEffect(() => {
    if (!namespace) {
      setPage({});
      setT({ ...common });
      return;
    }

    let cancelled = false;

    (async () => {
      const dict = await load(locale, namespace);
      if (cancelled) return;

      setPage(dict);
      setT({ ...common, ...dict });
    })();

    return () => {
      cancelled = true;
    };
  }, [namespace, locale, common]);

  const setLocale = (l: Locale) => {
    if (l !== locale) setLocaleState(l);
  };

  return (
    <I18nContext.Provider value={{ t, locale, setLocale, setNamespace }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(namespace?: string) {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");

  useEffect(() => {
    if (namespace) ctx.setNamespace(namespace);
  }, [namespace]);

  return ctx;
}
