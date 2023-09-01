import { Head } from '$fresh/runtime.ts';

import type { UnknownPageProps } from '$fresh/server.ts';

export default function Error404(_props: UnknownPageProps) {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>

            <div class='sm:px-6 lg:px-8 bg-gray-50 flex flex-col justify-center min-h-screen py-12 sm:mx-auto sm:w-full sm:max-w-xl items-start mx-8 space-y-2'>
                <header class='space-y-4'>
                    <h1 class='sm:text-6xl text-4xl font-bold text-gray-900'>
                        404
                    </h1>

                    <h2 class='sm:text-4xl text-2xl font-bold text-gray-900'>
                        Page not found
                    </h2>

                    <p class='sm:text-lg text-md text-gray-500'>
                        The page you were looking for doesn't exist.
                    </p>
                </header>

                <footer class='text-sm text-gray-500'>
                    <p>
                        Go back{' '}
                        <a
                            class='font-bold text-blue-600 hover:text-blue-700 rounded-md transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            href='/'
                            rel='noreferrer noopener'
                            target='_blank'
                        >
                            home
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
}
