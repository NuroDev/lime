import { cn } from '~/utils/cn.ts';

import type { JSX } from 'preact';
import type { LucideIcon } from 'lucide-preact';

interface LoginButtonProps
    extends Omit<JSX.HTMLAttributes<HTMLAnchorElement>, 'icon'> {
    icon?: LucideIcon;
}

export function LoginButton(
    {
        children,
        icon: Icon,
        ...rest
    }: LoginButtonProps,
) {
    return (
        <a
            class={cn(
                'group relative flex items-center justify-center w-full p-3 h-13',
                'hover:bg-gray-100/50 dark:hover:bg-gray-800',
                'font-medium text-gray-400 dark:text-white',
                'border-2 border-gray-100 hover:border-gray-200/25 dark:border-gray-800 dark:hover:border-gray-700',
                'rounded-lg',
                'transition ease-in-out duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900',
            )}
            {...rest}
        >
            {Icon
                ? (
                    <span class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <Icon
                            aria-hidden={true}
                            // aria-label={`${provider.name} logo`}
                            class='w-5 h-5'
                        />
                    </span>
                )
                : null}

            <span>{children}</span>
        </a>
    );
}
