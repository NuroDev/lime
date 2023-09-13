import { z } from 'zod';

import { t } from '~/trpc/context.ts';

export const helloRouter = t.procedure
    .input(z.object({
        name: z.string().optional(),
    }))
    .query(({ input }) => ({
        message: `Hello ${input.name || 'World'}`,
    }));
