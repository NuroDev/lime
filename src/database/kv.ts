const KV_PATH = Deno.env.get('KV_PATH') || './kv/local.db';

export const kv = await Deno.openKv(
    KV_PATH,
);
