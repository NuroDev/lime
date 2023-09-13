import { assertEquals } from '$std/testing/asserts.ts';
import { createHandler, type ServeHandlerInfo } from '$fresh/server.ts';

import manifest from '~/fresh.gen.ts';

const SERVE_HANDLER_INFO: ServeHandlerInfo = {
    localAddr: { hostname: '127.0.0.1', port: 8000, transport: 'tcp' },
    remoteAddr: { hostname: '127.0.0.1', port: 53496, transport: 'tcp' },
};

Deno.test('HTTP assert test.', async (t) => {
    const handler = await createHandler(manifest);

    await t.step('[GET] - /', async () => {
        const resp = await handler(
            new Request('http://127.0.0.1/'),
            SERVE_HANDLER_INFO,
        );

        assertEquals(resp.status, 200);
    });

    await t.step('[GET] - /api/trpc/hello', async () => {
        const url = new URL('http://127.0.0.1/api/trpc/hello');
        url.searchParams.set('batch', '1');
        url.searchParams.set(
            'input',
            JSON.stringify({
                '0': {
                    json: {},
                },
            }),
        );

        const resp = await handler(new Request(url.href), SERVE_HANDLER_INFO);
        assertEquals(resp.status, 200);
        assertEquals(resp.ok, true);

        const json = await resp.json();
        assertEquals(json, [{
            result: {
                data: {
                    json: {
                        message: 'Hello World',
                    },
                },
            },
        }]);
    });
});
