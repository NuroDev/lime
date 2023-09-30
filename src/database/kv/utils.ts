import type { KvConsistencyOptions, MapTypedKv } from './types.ts';
import type { Prettify } from '~/types/utils.ts';

/**
 * Creates a typed wrapper around a Deno.Kv instance.
 *
 * @example
 * ```ts
 * interface Post {
 *     title: string;
 *     slug: string;
 *     content: string;
 * }
 *
 * interface User {
 *      name: string;
 *      email: string;
 * }
 *
 * type Database = {
 *      posts: [`pst_${number}`, Post];
 *      users: [`usr_${string}`, User];
 * };
 *
 * const db = createdTypedKv<Database>(kv);
 *
 * const user = await db.users.get('usr_abc123');
 * //     ^? Deno.KvEntryMaybe<User>
 *
 * const posts = await db.posts.getMany(['pst_1', 'pst_2', 'pst_3']);
 * //     ^? [Deno.KvEntryMaybe<Post>, Deno.KvEntryMaybe<Post>, Deno.KvEntryMaybe<Post>]
 * ```
 *
 * @param kv - The Deno.Kv instance to wrap.
 *
 * @returns - A typed wrapper around the Deno.Kv instance.
 */
export function createdTypedKv<
    TDatabase extends Record<string, [key: string, value: unknown]>,
>(kv: Deno.Kv) {
    return new Proxy(kv, {
        get: (_, prop: string) => ({
            delete: (id: string) => kv.delete([prop, id]),
            get: (id: string, options?: KvConsistencyOptions) =>
                kv.get([prop, id], options),
            getMany: <T extends readonly unknown[]>(
                keys: readonly [...{ [K in keyof T]: string }],
                options?: KvConsistencyOptions,
            ) => kv.getMany(keys.map((key) => [prop, key] as const), options),
            list: (options?: Deno.KvListOptions) =>
                kv.list({ prefix: [prop] }, options),
            set: (id: string, value: Partial<unknown>) =>
                kv.set([prop, id], value),
        }),
    }) as {
        [K in keyof TDatabase]: Prettify<
            MapTypedKv<TDatabase[K][0], TDatabase[K][1]>
        >;
    };
}
