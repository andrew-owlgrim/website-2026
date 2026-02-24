import { Outlet, redirect, type LoaderFunctionArgs } from "react-router";

const SUPPORTED = ["en", "ua", "ru"] as const;

export function loader({ params }: LoaderFunctionArgs) {
  const locale = params.lang as (typeof SUPPORTED)[number];

  if (!SUPPORTED.includes(locale)) {
    throw redirect("/en");
  }

  return { locale };
}

export default function LangLayout() {
  return <Outlet />;
}
