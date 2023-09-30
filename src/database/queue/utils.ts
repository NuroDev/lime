import { z } from 'zod';

import type { EnqueueRecord, ListenerOptions } from '~/database/queue/types.ts';

/**
 * Create a new typed Deno KV queue.
 *
 * @param kv - Deno KV instance
 * @param listener - A function that will be called when a new queue item is available.
 */
export function createdTypedQueue<TQueue extends Record<string, object>>(
    kv: Deno.Kv,
    listener: (options: ListenerOptions<TQueue>) => void | Promise<void>,
): {
    enqueue: EnqueueRecord<TQueue>;
    listener: (value: unknown) => ReturnType<typeof listener>;
};

/**
 * Create a new typed Deno KV queue.
 *
 * @param kv - Deno KV instance
 * @param schema - A Zod Schema that will be used to validate the incoming queue item(s).
 * @param listener - A function that will be called when a new queue item is available.
 */
export function createdTypedQueue<TZodSchema extends z.AnyZodObject>(
    kv: Deno.Kv,
    schema: TZodSchema,
    listener: (
        options: ListenerOptions<z.infer<TZodSchema>>,
    ) => void | Promise<void>,
): {
    enqueue: EnqueueRecord<z.infer<TZodSchema>>;
    listener: (value: unknown) => ReturnType<typeof listener>;
};

export function createdTypedQueue<T extends Record<string, object>>(
    kv: Deno.Kv,
    ...args: [
        (options: ListenerOptions<T>) => void | Promise<void>,
    ] | [
        T,
        (options: ListenerOptions<T>) => void | Promise<void>,
    ]
) {
    const enqueue = new Proxy(
        {},
        {
            get: (_, type) =>
            (body: unknown, options?: Parameters<Deno.Kv['enqueue']>[1]) =>
                kv.enqueue({
                    type,
                    body: body,
                }, options),
        },
    );

    switch (args.length) {
        case 1: {
            const [listener] = args;

            return {
                enqueue,
                listener,
            };
        }
        case 2: {
            const [Schema, listener] = args as unknown as [
                z.AnyZodObject,
                (
                    options: ListenerOptions<z.infer<typeof Schema>>,
                ) => void | Promise<void>,
            ];

            return {
                enqueue,
                listener: (value: unknown) => {
                    const possibleTypes = Object.keys(Schema._def.shape()) as [
                        string,
                        ...string[],
                    ];
                    const parsedValue = z.object({
                        type: z.enum(possibleTypes),
                        body: z.unknown(),
                    }).safeParse(value);
                    if (!parsedValue.success) {
                        throw new Error('Invalid queue item');
                    }

                    const SelectedSchema = Schema._def
                        .shape()[parsedValue.data.type] as z.AnyZodObject;
                    const parsedBody = SelectedSchema.safeParse(
                        parsedValue.data.body,
                    );
                    if (!parsedBody.success) {
                        throw new Error('Invalid queue item');
                    }

                    return listener({
                        type: parsedValue.data.type,
                        body: parsedValue.data.body,
                    });
                },
            };
        }
        default: {
            throw new Error('Invalid arguments');
        }
    }
}
