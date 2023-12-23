import { useCallback, useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

import { client } from '~/trpc/client.ts';

export function Fetch() {
    const message = useSignal<string | null>(null);

    const fetchHello = useCallback(async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await client.hello.query({
                name: 'from tRPC!',
            });

            message.value = response.message;
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchHello();
    }, []);

    if (!message.value) {
        return (
            <div class='w-full max-w-xs h-6 bg-gray-500 animate-pulse rounded-md' />
        );
    }

    return <>{message}</>;
}
