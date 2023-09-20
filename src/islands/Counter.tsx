import { Button } from '~/components/Button.tsx';

import type { Signal } from '@preact/signals';

interface CounterProps {
    count: Signal<number>;
}

export function Counter({ count }: CounterProps) {
    return (
        <div class='flex gap-8 py-6'>
            <Button onClick={() => count.value -= 1}>-1</Button>
            <p class='text-3xl text-gray-900 dark:text-white'>{count}</p>
            <Button onClick={() => count.value += 1}>+1</Button>
        </div>
    );
}
