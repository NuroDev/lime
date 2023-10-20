import { ImageResponse } from 'og_edge';
import { z } from 'zod';

import type { Handlers } from '$fresh/server.ts';

const ParamsSchema = z.object({
    template: z.union([
        z.literal('Foo'),
        z.literal('Bar'),
    ]),
    width: z.number().min(1).default(1200),
    height: z.number().min(1).default(630),
});

export const handler: Handlers = {
    GET: async (request) => {
        const url = new URL(request.url);
        const searchParams = Object.fromEntries(url.searchParams.entries());

        const parsedParams = ParamsSchema.safeParse(searchParams);
        if (!parsedParams.success) {
            return Response.json({
                ok: false,
                error: 'Invalid parameters provided',
                issues: parsedParams.error.issues,
            }, { status: 400 });
        }

        const componentImport = await import(
            `../../components/og/${parsedParams.data.template}.tsx`
        );
        if (!componentImport.default) {
            return Response.json({
                ok: false,
                error: 'Template not found',
            }, { status: 500 });
        }
        const Component = componentImport.default;

        return new ImageResponse(
            Component({
                request,
                searchParams,
                url,
            }),
            {
                headers: request.headers,
                height: parsedParams.data.height,
                width: parsedParams.data.width,
            },
        );
    },
};
