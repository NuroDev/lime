import { defineLayout } from '$fresh/server.ts';

import { Header } from '~/components/Header.tsx';

export default defineLayout((_req, { Component }) => (
    <>
        <Header isLoggedIn={false} />
        <main class='sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center min-h-full py-12 sm:mx-auto sm:w-full sm:max-w-7xl items-start mx-8 text-gray-500 dark:text-gray-400'>
            <Component />
        </main>
    </>
));
