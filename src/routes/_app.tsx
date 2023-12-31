import { defineApp } from '$fresh/server.ts';

export default defineApp((_req, { Component }) => (
    <html lang='en'>
        <head>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <meta
                name='description'
                content='An opinionated Deno Fresh project template'
            />
            <title>Lime</title>
            <link rel='stylesheet' href='/styles.css' />
        </head>
        <body class='antialiased bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-100'>
            <Component />
        </body>
    </html>
));
