import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./ui/styles/base.scss";
import Error from "./components/Error/Error";
import { UIProvider } from "./ui/provider/UIProvider";
import { I18nProvider, useI18n } from "./i18n";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg+xml",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <I18nProvider>
          <UIProvider>{children}</UIProvider>
        </I18nProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { t } = useI18n();

  let message = t.error_message;
  let details = t.error_details;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      message = t.error_404_message;
      details = t.error_404_details;
    } else {
      message = `${error.status} error`;
      details = error.statusText;
    }
  }

  return (
    <div className="page">
      <Error message={message} details={details} />
    </div>
  );
}
