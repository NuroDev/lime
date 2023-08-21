import { defineApp } from "$fresh/server.ts";

export default defineApp((_req, { Component }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="An opinionated Deno Fresh project template"
      />
      <title>Lime</title>
    </head>
    <body class="antialiased bg-gray-50 text-gray-600">
      <Component />
    </body>
  </html>
));
