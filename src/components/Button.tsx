import { IS_BROWSER } from '$fresh/runtime.ts';

import { cn } from '~/utils/cn.ts';

import type { JSX } from 'preact';

type ButtonProps = JSX.HTMLAttributes<
    HTMLButtonElement
>;

export function Button(
    { class: className, disabled, ...props }: ButtonProps,
) {
    return (
        <button
            class={cn(
                'px-3 py-2',
                'dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800',
                'text-gray-900 dark:text-white',
                'border-2 border-transparent dark:border-gray-800 dark:hover:border-gray-700',
                'rounded-md',
                'transition ease-in-out duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900',
            )}
            disabled={!IS_BROWSER || disabled}
            {...props}
        />
    );
}
