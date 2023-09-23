import { cn } from '~/utils/cn.ts';

import type { JSX } from 'preact';

type LogoProps = JSX.SVGAttributes<SVGSVGElement>;

export function Logo({ class: className, ...rest }: LogoProps) {
    return (
        <svg
            class={cn('text-primary-600', className)}
            height='1024'
            width='1024'
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >
            <circle
                cx='32'
                cy='32'
                fill='currentColor'
                r='24'
            >
            </circle>
        </svg>
    );
}
