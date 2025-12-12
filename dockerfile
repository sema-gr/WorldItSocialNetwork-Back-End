FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install

COPY . .

RUN bunx prisma generate

RUN bun run build

RUN mkdir -p dist/generated && cp -r src/generated/* dist/generated

EXPOSE 3000

CMD ["bun", "dist/index.js"]
