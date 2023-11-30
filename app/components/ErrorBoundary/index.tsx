import { Meta, Links } from "@remix-run/react";
import { isBrowser } from "@/utils/isBrowser";
import { createElement } from "react";

export default function ErrorBoundary() {
  if (isBrowser()) {
    return createElement("html", {
      suppressHydrationWarning: true,
      // Inject the server-side rendered HTML.
      dangerouslySetInnerHTML: {
        __html: document.getElementsByTagName("html")[0].innerHTML,
      },
    });
  }
  return (
    <html lang="en">
      <head>
        <title>Error!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>Error!</body>
    </html>
  );
}
