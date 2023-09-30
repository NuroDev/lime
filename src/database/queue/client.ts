import { z } from 'zod';

import { createdTypedQueue } from '~/database/queue/utils.ts';
import { kv } from '~/database/kv/mod.ts';

const { enqueue, listener } = createdTypedQueue(
    kv,
    z.object({
        // Add your queue validators here.
    }),
    ({ body, type }) => {
        switch (type) {
            case 'email': {
                console.log('Receieved', body);
                return;
            }
            default:
                throw new Error('Unknown queue type', {
                    cause: { body, type },
                });
        }
    },
);

// TODO: Investigate moving to a background worker.
kv.listenQueue(listener);

export { enqueue };
