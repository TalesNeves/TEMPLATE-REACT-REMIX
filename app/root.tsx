import {
  Links,
  Meta,
  ScrollRestoration,
  Scripts,
  LiveReload,
  useLoaderData,
} from "@remix-run/react";
import { AppProvider } from "./providers/app";
import { getPublicKeys } from "./environment.server";
import { PublicEnv } from "./components/PublicEnv";
import { json } from "@remix-run/node";
import getEnv from "./utils/getEnv";
import ErrorBoundary from "./components/ErrorBoundary";

export function loader() {
  return json(getPublicKeys());
}

export { ErrorBoundary };

export default function App() {
  const { publicKeys } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{getEnv()["APP_TITLE"]}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <PublicEnv {...publicKeys} />
        <AppProvider />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
