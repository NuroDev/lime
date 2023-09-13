import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter, createContext } from '~/trpc/mod.ts';

import type { Handler } from '$fresh/server.ts';

export const handler: Handler = (req) =>
    fetchRequestHandler({
        createContext,
        endpoint: '/api/trpc',
        req,
        router: appRouter,
    });
