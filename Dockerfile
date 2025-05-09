FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "server-1.ts"]
