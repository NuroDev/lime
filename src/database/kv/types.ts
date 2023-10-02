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

/**
 * @see https://gist.github.com/NuroDev/15e1f8f9a5f8050c8717e872778ea79a#file-example-ts-L1-L15
 */
// deno-lint-ignore ban-types
export type Database = {};
