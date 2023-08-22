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
            class='px-3 py-2 border-gray-200 border-2 rounded bg-gray-100 hover:bg-gray-200 hover:border-gray-300 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            disabled={!IS_BROWSER || disabled}
            {...props}
        />
    );
}
