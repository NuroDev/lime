import { t } from './context.ts';
import { helloRouter } from './routers/mod.ts';

export const appRouter = t.router({
    hello: helloRouter,
});

export type AppRouter = typeof appRouter;

export { createContext } from './context.ts';
