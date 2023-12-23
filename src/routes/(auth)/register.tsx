import { GithubIcon } from 'lucide-preact';
import { Head } from '$fresh/runtime.ts';

import { LoginButton } from '~/islands/LoginButton.tsx';
import { Logo } from '~/components/Logo.tsx';

export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>Register ─ Lime</title>
            </Head>

            <div class='flex items-center justify-center min-h-screen'>
                <div class='sm:mx-0 w-full max-w-sm mx-4 space-y-8'>
                    <div class='space-y-4'>
                        <div class='flex justify-center items-center'>
                            <a
                                href='/'
                                class='flex justify-center hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-lg default-transition default-focus'
                            >
                                <Logo class='w-auto h-16 mx-auto' />
                            </a>
                        </div>

                        <h2 class='text-3xl font-extrabold text-center text-gray-900 dark:text-white'>
                            Sign up to your account
                        </h2>

                        <p class='mt-2 text-sm text-center text-gray-400'>
                            Already have an account?{' '}
                            <a
                                class='text-primary-600 hover:text-primary-700 default-transition default-focus font-bold rounded-md'
                                href='/login'
                            >
                                Login to your account
                            </a>
                        </p>
                    </div>

                    <div class='space-y-4'>
                        <LoginButton href='#' icon={GithubIcon}>
                            Sign up with{' '}
                            <span className='capitalize'>GitHub</span>
                        </LoginButton>
                    </div>

                    <p class='mt-2 text-sm text-center text-gray-400'>
                        By signing up, you agree to our <br />{' '}
                        <a
                            class='text-primary-600 hover:text-primary-700 default-transition default-focus font-bold rounded-md'
                            href='/terms'
                        >
                            Terms of Service
                        </a>{' '}
                        &{' '}
                        <a
                            class='text-primary-600 hover:text-primary-700 default-transition default-focus font-bold rounded-md'
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
