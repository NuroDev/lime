import { dirname, resolve } from '$std/path/mod.ts';
import { existsSync } from '$std/fs/mod.ts';

import '$std/dotenv/load.ts';

import { createdTypedKv } from '~/database/kv/utils.ts';

import type { Database } from './types.ts';

const KV_PATH = Deno.env.get('KV_PATH') || './kv/local.db';

const resolvedKvDir = resolve(dirname(KV_PATH));
if (!existsSync(resolvedKvDir)) {
    Deno.mkdirSync(resolvedKvDir, { recursive: true });
}

export const kv = await Deno.openKv(
    KV_PATH,
);

export const tkv = createdTypedKv<Database>(kv);
