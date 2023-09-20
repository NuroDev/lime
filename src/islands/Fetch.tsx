import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

import { client } from '~/trpc/client.ts';

export function Fetch() {
    const message = useSignal<string | null>(null);

    useEffect(() => {
        async function fetchHello(): Promise<void> {
            try {
                const response = await client.hello.query({
                    name: 'from tRPC!',
                });

                message.value = response.message;
            } catch (error) {
                console.error(error);
            }
        }

        fetchHello();
    }, []);

    return <>{message}</>;
}
