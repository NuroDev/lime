import { GithubIcon } from 'lucide-preact';
import { Head } from '$fresh/runtime.ts';

import { cn } from '~/utils/cn.ts';
import { Logo } from '~/components/Logo.tsx';

import type { JSX } from 'preact';
import type { LucideIcon } from 'lucide-preact';

interface LoginButtonProps
    extends Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'icon'> {
    icon?: LucideIcon;
    provider: string;
}

function LoginButton(
    {
        children,
        icon: Icon,
        provider,
        ...rest
    }: LoginButtonProps,
) {
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
            )}
            // onClick={() => signIn(provider.id, { callbackUrl: '/teams' })}
            type='button'
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

            <span>
                Sign in with <span className='capitalize'>{provider}</span>
            </span>

            {children}
        </button>
    );
}

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login ─ Lime</title>
            </Head>

            <div class='flex items-center justify-center min-h-screen'>
                <div class='sm:mx-0 w-full max-w-sm mx-4 space-y-8'>
                    <div class='space-y-4'>
                        <div class='flex justify-center items-center'>
                            <a
                                href='/'
                                class='flex justify-center hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-lg transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900'
                            >
                                <Logo class='w-auto h-16 mx-auto' />
                            </a>
                        </div>

                        <h2 class='text-3xl font-extrabold text-center text-gray-900 dark:text-white'>
                            Sign in to your account
                        </h2>

                        <p class='mt-2 text-sm text-center text-gray-400'>
                            Don&apos;t have an account?{' '}
                            <a
                                class='text-primary-600 hover:text-primary-700 default-transition default-focus font-bold rounded-lg'
                                href='/register'
                            >
                                Create an account
                            </a>
                        </p>
                    </div>

                    <div class='space-y-4'>
                        <LoginButton provider='GitHub' icon={GithubIcon} />
                    </div>

                    <p class='mt-2 text-sm text-center text-gray-400'>
                        By logging in, you agree to our <br />{' '}
                        <a
                            class='text-primary-600 hover:text-primary-700 default-transition default-focus font-bold rounded-lg'
                            href='/terms'
                        >
                            Terms of Service
                        </a>{' '}
                        &{' '}
                        <a
                            class='text-primary-600 hover:text-primary-700 default-transition default-focus font-bold rounded-lg'
                            href='/privacy'
                        >
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
