FROM node:20-bullseye-slim AS builder
WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 g++ make && \
    rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
FROM node:20-bullseye-slim AS production
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3001

# Run the compiled app directly. Environment variables (DB, COOKIE_SECRET etc.)
# should be provided via docker-compose or the environment at runtime.
CMD ["node", "dist/app"]
