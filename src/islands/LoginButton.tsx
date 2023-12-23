import { Loader2Icon } from 'lucide-preact';
import { useSignal } from '@preact/signals';

import { cn } from '~/utils/cn.ts';

import type { JSX } from 'preact';

type LoginButtonProps = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'icon'>;

export function LoginButton(
    {
        class: className,
        children,
        ...rest
    }: LoginButtonProps,
) {
    const loading = useSignal<boolean>(false);

    const handleClick: JSX.MouseEventHandler<HTMLButtonElement> = async (
        event,
    ) => {
        loading.value = true;

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false;
        }
    };

    return (
        <button
            class={cn(
                'group relative flex items-center justify-center w-full p-3 h-13',
                'hover:bg-gray-100/50 dark:hover:bg-gray-800',
                'font-medium text-gray-400 dark:text-white',
                'border-2 border-gray-100 hover:border-gray-200/25 dark:border-gray-800 dark:hover:border-gray-700',
                'rounded-lg',
                'transition ease-in-out duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900',
                className,
            )}
            onClick={handleClick}
            {...rest}
        >
            {loading.value === true
                ? <Loader2Icon class='animate-spin' />
                : children}
        </button>
    );
}
