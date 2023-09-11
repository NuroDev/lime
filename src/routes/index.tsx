import { useSignal } from '@preact/signals';
import { defineRoute } from '$fresh/server.ts';

import Counter from '~/islands/Counter.tsx';

function CounterWrapper() {
    const count = useSignal(0);

    return <Counter count={count} />;
}

export default defineRoute(() => (
    <div class='sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center min-h-screen py-12 sm:mx-auto sm:w-full sm:max-w-xl items-start mx-8 text-gray-500 dark:text-gray-400'>
        <header class='space-y-4'>
            <h2 class='sm:text-4xl text-2xl font-bold text-gray-900 dark:text-white'>
                🍋 Lime
            </h2>

            <p class='sm:text-lg text-md'>
                Get started building your next project by editing the files
                inside <code>src/routes/</code>
            </p>
        </header>

        <main class='w-full my-4'>
            <CounterWrapper />
        </main>

        <footer class='text-sm space-y-2'>
            <p>
                Built with <span class='text-red-600'>❤️</span> by{' '}
                <a
                    class='font-bold text-primary-600 hover:text-primary-700 rounded-md transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900'
                    href='https://twitter.com/nurodev'
                    rel='noreferrer noopener'
                    target='_blank'
                >
                    @nurodev
                </a>
            </p>

            <p>
                View{' '}
                <a
                    class='font-bold text-primary-600 hover:text-primary-700 rounded-md transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900'
                    href='https://github.com/nurodev/lime'
                    rel='noreferrer noopener'
                    target='_blank'
                >
                    source
                </a>
            </p>
        </footer>
    </div>
));
