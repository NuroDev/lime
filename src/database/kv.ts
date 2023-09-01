const KV_PATH = Deno.env.get('KV_PATH');

export const kv = await Deno.openKv(
    KV_PATH,
);
