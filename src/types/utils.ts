/**
 * Clean up the type to make it more readable
 */
export type Prettify<T> =
    & { [K in keyof T]: T[K] }
    // deno-lint-ignore ban-types
    & {};
