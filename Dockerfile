FROM denoland/deno:alpine-1.36.1

EXPOSE 8000

WORKDIR /app

USER deno

ADD ./deno.json /app

ADD ./src/ /app/src

RUN deno cache ./src/main.ts

CMD ["run", "--allow-env", "--allow-net", "--allow-read", "src/main.ts"]
