import { defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';
import presetAutoprefix from '@twind/preset-autoprefix';
import * as defaultColors from '@twind/preset-tailwind/colors';

import type { Options as TwindConfig } from '$fresh/plugins/twindv1/shared.ts';
import type { Preset } from '@twind/core';

// TODO(@nurodev): Fix type error in default export caused by `theme.extend`
const baseConfig = defineConfig({
    darkMode: 'media',
    presets: [
        presetAutoprefix() as Preset,
        presetTailwind() as Preset,
    ],
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
});

export default Object.assign(
    {},
    baseConfig,
    { selfURL: import.meta.url } as TwindConfig,
);
