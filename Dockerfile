# ── Builder: bundle frontend ─────────────────────────────
FROM oven/bun:1-slim AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY build.ts ./
COPY frontend ./frontend
COPY public ./public
RUN bun run build.ts

# ── Runtime ──────────────────────────────────────────────
FROM debian:bookworm-slim

# ADB + Bun
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    android-tools-adb \
    && rm -rf /var/lib/apt/lists/* \
    && curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

WORKDIR /app
COPY --from=builder /app/ ./
# Prebuilt daemon binary — pushed to the TV at startup
COPY keyd.dex ./

# ADB needs to reach the TV on the local network
EXPOSE 8180
ENV PORT=8180
ENV ADB_DEVICE=

CMD ["bun", "run", "index.ts"]
