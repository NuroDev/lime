import type { OGComponentProps } from '~/types/og.ts';

type HelloWorldProps = OGComponentProps<{
    name?: string;
}>;

// TODO: Handle exporting a Zod schema for the search params to be parsed
// `export const ParamsSchema = z.object({ ... });`

export default function HelloWorld({ searchParams }: HelloWorldProps) {
    return <h1>Hello {searchParams.name ?? 'World'}</h1>;
}
