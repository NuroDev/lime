import type { MiddlewareHandler } from '$fresh/server.ts';

export const handler: MiddlewareHandler = (_req, ctx) => ctx.next();
