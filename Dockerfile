FROM denoland/deno:alpine-1.36.1

EXPOSE 8000

WORKDIR /app

USER deno

ADD ./deno.jsonc /app

ADD ./src/ /app/src

RUN deno cache ./src/main.ts

LABEL org.opencontainers.image.title "Lime"
LABEL org.opencontainers.image.description "An opinionated Deno Fresh project template"

CMD ["run", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "src/main.ts"]
