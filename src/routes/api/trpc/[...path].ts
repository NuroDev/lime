import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter, createContext } from '~/trpc/mod.ts';

import type { Handler } from '$fresh/server.ts';

export const handler: Handler = (req, ctx) =>
    fetchRequestHandler({
        createContext: createContext(ctx),
        endpoint: '/api/trpc',
        req,
        router: appRouter,
    });
