export type KvConsistencyOptions = Parameters<Deno.Kv['get']>[1];

export interface MapTypedKv<K extends string, V extends unknown> {
    delete(id: K): Promise<void>;
    get(id: K, options?: KvConsistencyOptions): Promise<Deno.KvEntryMaybe<V>>;
    getMany<T extends readonly unknown[]>(
        keys: readonly [...{ [L in keyof T]: K }],
        options?: KvConsistencyOptions,
    ): Promise<{ [L in keyof T]: Deno.KvEntryMaybe<V> }>;
    list(options?: Deno.KvListOptions): Promise<Deno.KvListIterator<V>>;
    set(id: K, value: Partial<V>): Promise<void>;
}

export interface User {
    name: string;
    email: string;
}

export interface Post {
    title: string;
    slug: string;
    content: string;
}

export type Database = {
    posts: [`pst_${number}`, Post];
    users: [`usr_${string}`, User];
};
