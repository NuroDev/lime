import { useSignal } from '@preact/signals';

import { Button } from '~/components/Button.tsx';

export function Counter() {
    const count = useSignal(0);

    return (
        <div class='flex gap-8 py-6'>
            <Button onClick={() => count.value -= 1}>-1</Button>
            <p class='text-3xl text-gray-900 dark:text-white'>{count}</p>
            <Button onClick={() => count.value += 1}>+1</Button>
        </div>
    );
}
