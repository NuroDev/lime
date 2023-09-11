import * as defaultColors from 'twind/colors';
import type { Options } from '$fresh/plugins/twind.ts';

export default {
    darkMode: 'class',
    selfURL: import.meta.url,
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
                primary: defaultColors.rose,
            },
        },
    },
} satisfies Options;
