import { ArrowRight, LockIcon, LogOutIcon, StarIcon } from 'lucide-preact';

import { cn } from '~/utils/cn.ts';

import type { LucideIcon } from 'lucide-preact';
import type { JSX } from 'preact';

const LINKS = [
    {
        label: 'Link',
        href: '#',
        icon: StarIcon,
    },
];

interface LinkButtonProps
    extends Omit<JSX.HTMLAttributes<HTMLAnchorElement>, 'icon'> {
    icon?: LucideIcon;
}

function LinkButton({ children, href, icon: Icon }: LinkButtonProps) {
    return (
        <a
            class={cn(
                'flex items-center space-x-2 py-2 px-4',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                'text-sm font-medium hover:text-gray-900 dark:text-gray-200 dark:hover:text-white',
                'rounded-lg',
                'transition ease-in-out duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900',
            )}
            href={href}
        >
            {Icon ? <Icon aria-hidden={true} class='w-3.5	h-3.5' /> : null}
            {Icon ? <span>{children}</span> : children}
        </a>
    );
}

interface HeaderProps {
    isLoggedIn: boolean;
}

export function Header({ isLoggedIn }: HeaderProps) {
    return (
        <header class='py-10'>
            <div class='max-w-7xl sm:px-6 lg:px-8 px-4 mx-auto'>
                <nav class='relative z-50 flex justify-between'>
                    <div class='md:gap-x-6 flex items-center'>
                        <a
                            aria-label='Home'
                            class='transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center p-2 rounded-lg'
                            href='/'
                        >
                            <svg
                                class='h-8 w-auto text-primary-600'
                                height='1024'
                                width='1024'
                                viewBox='0 0 64 64'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <circle
                                    cx='32'
                                    cy='32'
                                    fill='currentColor'
                                    r='24'
                                >
                                </circle>
                            </svg>
                        </a>

                        <div class='md:flex md:gap-x-2 hidden'>
                            {LINKS.map((item) => (
                                <LinkButton href={item.href} icon={item.icon}>
                                    <span>{item.label}</span>
                                </LinkButton>
                            ))}
                        </div>
                    </div>

                    <div class='gap-x-5 md:gap-x-6 flex items-center'>
                        {isLoggedIn
                            ? (
                                <>
                                    <div class='md:block hidden'>
                                        <LinkButton href='#' icon={LogOutIcon}>
                                            Log Out
                                        </LinkButton>
                                    </div>

                                    <a
                                        class='transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 flex items-center space-x-2 py-2 px-4 text-sm font-medium rounded-full bg-primary-600 hover:bg-primary-700 group px-6 font-bold text-white'
                                        href='#'
                                    >
                                        <span>Open App</span>
                                        <ArrowRight class='group-hover:translate-x-1 transition ease-in-out duration-300 transform w-3.5 h-3.5 mt-0.5' />
                                    </a>
                                </>
                            )
                            : (
                                <>
                                    <div className='md:block hidden'>
                                        <LinkButton
                                            href='#'
                                            icon={LockIcon}
                                        >
                                            Log in
                                        </LinkButton>
                                    </div>

                                    <a
                                        class='transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 flex items-center space-x-2 py-2 px-4 text-sm font-medium rounded-full bg-primary-600 hover:bg-primary-700 group px-6 font-bold text-white'
                                        href='#'
                                    >
                                        <span>Get Started</span>
                                        <ArrowRight class='group-hover:translate-x-1 transition ease-in-out duration-300 transform w-3.5 h-3.5 mt-0.5' />
                                    </a>
                                </>
                            )}

                        <div class='md:hidden -mr-1'>
                            {/* TODO: Add mobile nav menu using Headless UI or something similar */}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
