export interface OGComponentProps<
    TSearchParams extends Record<string, string> = Record<string, string>,
> {
    request: Request;
    searchParams: TSearchParams;
    url: URL;
}
