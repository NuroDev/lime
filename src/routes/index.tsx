import { useSignal } from '@preact/signals';

import Counter from '~/islands/Counter.tsx';

export default function Home() {
    const count = useSignal(0);

    return (
        <div class='sm:px-6 lg:px-8 bg-gray-50 flex flex-col justify-center min-h-screen py-12 sm:mx-auto sm:w-full sm:max-w-xl items-start mx-8'>
            <header class='space-y-4'>
                <h2 class='sm:text-4xl text-2xl font-bold text-gray-900'>
                    🍋 Lime
                </h2>

                <p class='sm:text-lg text-md text-gray-500'>
                    Get started building your next project by editing the files
                    inside <code>src/routes/</code>
                </p>
            </header>

            <main class='w-full my-4'>
                <Counter count={count} />
            </main>

            <footer class='text-sm text-gray-500'>
                <p>
                    Built with <span class='text-red-600'>❤️</span> by{' '}
                    <a
                        class='font-bold text-blue-500 hover:text-blue-700 rounded-md transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        href='https://twitter.com/nurodev'
                        rel='noreferrer noopener'
                        target='_blank'
                    >
                        @nurodev
                    </a>
                </p>
            </footer>
        </div>
    );
}
