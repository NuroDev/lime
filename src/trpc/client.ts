import superjson from 'superjson';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type { AppRouter } from '~/trpc/mod.ts';

export const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({ url: '/api/trpc' }),
    ],
    transformer: superjson,
});
