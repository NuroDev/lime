import superjson from 'superjson';
import { initTRPC } from '@trpc/server';

import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import type { HandlerContext } from '$fresh/server.ts';

interface Context {
    freshContext: HandlerContext;
    req: Request;
}

export function createContext(
    freshContext: HandlerContext,
): (opts: FetchCreateContextFnOptions) => Context {
    return ({ req }) => ({
        freshContext,
        req,
    });
}

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
});
