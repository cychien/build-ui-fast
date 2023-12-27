import "./tailwind.css";
import { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { Header } from "~/components/site/Header";

export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
];

export default function App() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Justin Chien" />
        <meta name="creator" content="Justin Chien" />
        <meta
          property="og:url"
          content={`https://build-ui-fast.com${location.pathname}`}
        />
        <meta property="og:site_name" content="Build UI Fast" />
        <meta property="og:image" content="https://build-ui-fast.com/ogn.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@justinchiency" />
        <meta
          name="twitter:url"
          content={`https://build-ui-fast.com${location.pathname}`}
        />
        <meta
          name="twitter:image"
          content="https://build-ui-fast.com/ogn.jpg"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
