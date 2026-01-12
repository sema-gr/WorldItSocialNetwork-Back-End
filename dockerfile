FROM oven/bun:latest

RUN apt-get update && apt-get install -y openssl libssl-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json bun.lockb* ./

COPY prisma ./prisma/

RUN bun install

COPY . .

RUN bunx prisma generate

RUN bun run build

EXPOSE 3000

CMD ["bun", "dist/index.js"]