import superjson from 'superjson';
import { initTRPC } from '@trpc/server';

import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export const t = initTRPC.create({
    transformer: superjson,
});

export function createContext(_options: FetchCreateContextFnOptions) {
    return {};
}
