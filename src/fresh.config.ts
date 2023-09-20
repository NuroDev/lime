import { defineConfig } from '$fresh/server.ts';
import twindPlugin from '$fresh/plugins/twindv1.ts';
import { freshSEOPlugin } from 'fresh_seo';

import manifest from '~/fresh.gen.ts';
import twindConfig from './twind.config.ts';

export default defineConfig({
    plugins: [
        freshSEOPlugin(manifest, {
            exclude: [],
            include: [],
        }),
        twindPlugin(twindConfig),
    ],
    port: Number(Deno.env.get('PORT')) || 8000,
});
