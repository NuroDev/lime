import type { Prettify } from '~/types/utils.ts';

export type EnqueueRecord<T extends Record<string, object>> = {
    [K in keyof T]: (
        body: T[K],
        options?: Parameters<Deno.Kv['enqueue']>[1],
    ) => Promise<void>;
};

export type ListenerOptions<T extends Record<string, object>> = {
    [K in keyof T]: Prettify<{ type: K; body: T[K] }>;
}[keyof T];
