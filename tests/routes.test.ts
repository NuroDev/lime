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
});
