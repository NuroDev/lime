import type { Config } from 'tailwindcss';

export default {
    content: ['{components,islands,routes}/**/*.{ts,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                gray: {
                    50: '#f9fafb',
                    100: '#eaeaeb',
                    200: '#cacbcd',
                    300: '#a7a9ac',
                    400: '#696c71',
                    500: '#282d34',
                    600: '#24292f',
                    700: '#181b20',
                    800: '#121518',
                    900: '#0c0e10',
                },
                primary: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                    950: '#4c0519',
                },
            },
        },
    },
} satisfies Config;
