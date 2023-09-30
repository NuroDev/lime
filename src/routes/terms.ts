import type { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
    GET: (req) => Response.redirect(new URL('/', req.url)),
};
