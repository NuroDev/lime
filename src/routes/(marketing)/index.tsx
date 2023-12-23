import { defineRoute } from '$fresh/server.ts';

import { Counter } from '~/islands/Counter.tsx';
import { Fetch } from '~/islands/Fetch.tsx';

export default defineRoute(() => (
    <>
        <section class='w-full my-4'>
            <div class='space-y-4'>
                <h2 class='sm:text-4xl text-2xl font-bold text-gray-900 dark:text-white'>
                    🍋 Lime
                </h2>

                <p class='sm:text-lg text-md'>
                    Get started building your next project by editing the files
                    inside <code>src/routes/</code>
                </p>
            </div>

            <Counter />
            <Fetch />
        </section>

        <section class='text-sm space-y-2'>
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
        </section>
    </>
));
