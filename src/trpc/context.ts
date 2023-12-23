import superjson from 'superjson';
import { initTRPC } from '@trpc/server';

import { tkv } from '~/database/kv/client.ts';

import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import type { FreshContext } from '$fresh/server.ts';

interface Context {
    freshContext: FreshContext;
    kv: typeof tkv;
    req: Request;
}

export function createContext(
    freshContext: FreshContext,
): (opts: FetchCreateContextFnOptions) => Context {
    return ({ req }) => ({
        freshContext,
        kv: tkv,
        req,
    });
}

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
});
