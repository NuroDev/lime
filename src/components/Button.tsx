import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

type ButtonProps = JSX.HTMLAttributes<
    HTMLButtonElement
>;

export function Button(
    { class: className, disabled, ...props }: ButtonProps,
) {
    return (
        <button
            class='px-3 py-2 text-gray-900 dark:text-white border-2 border-transparent dark:border-gray-800 dark:hover:border-gray-700 rounded-md dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900'
            disabled={!IS_BROWSER || disabled}
            {...props}
        />
    );
}
