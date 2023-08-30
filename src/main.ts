/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom" />

import '$std/dotenv/load.ts';

import { start } from '$fresh/server.ts';

import manifest from '~/fresh.gen.ts';
import config from '~/fresh.config.ts';

await start(manifest, config);
