FROM node:22-bookworm-slim

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

COPY index.js ./
COPY src ./src
COPY scripts ./scripts

RUN mkdir -p /data && chown -R node:node /app /data

USER node

CMD ["npm", "start"]
