import { defineConfig } from '$fresh/server.ts';
import { freshSEOPlugin } from 'fresh_seo';
import tailwind from '$fresh/plugins/tailwind.ts';

import manifest from '~/fresh.gen.ts';

export default defineConfig({
    plugins: [
        freshSEOPlugin(manifest, {
            exclude: [],
            include: [],
        }),
        tailwind(),
    ],
    port: Number(Deno.env.get('PORT')) || 8000,
});
