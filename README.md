# Mos Bot

Modernized Discord bot for P5 Shop with:

- Discord.js v14
- Slash commands with prefix fallback
- SQLite-backed prefix persistence
- Docker and Komodo deployment support
- GitHub Actions CI and GHCR publishing

## Requirements

- Node.js 22+
- A Discord bot token
- Privileged `Message Content Intent` enabled if you want prefix commands to keep working

## Local setup

1. Copy `.env.example` to `.env`.
2. Fill in `DISCORD_TOKEN` and `OWNER_ID`.
3. Install dependencies with `npm install`.
4. Start the bot with `npm start`.

Useful scripts:

- `npm run dev` to run in watch mode
- `npm run lint` for static checks
- `npm test` for unit tests
- `npm run sync:commands` to force command registration

## Environment variables

- `DISCORD_TOKEN`: required bot token
- `OWNER_ID`: required Discord user ID for owner-only commands
- `DEFAULT_PREFIX`: fallback prefix for message commands, default `.`
- `DATABASE_PATH`: SQLite database path, default `./data/bot.sqlite`
- `NODE_ENV`: `development` or `production`
- `SYNC_COMMANDS_ON_STARTUP`: set to `false` to skip startup command sync
- `DISCORD_GUILD_ID`: optional guild ID to register slash commands to one guild for fast updates

## Docker

Build locally:

```bash
docker build -t mos-bot .
```

Run locally:

```bash
docker run --env-file .env -v "$(pwd)/data:/data" mos-bot
```

## Komodo deployment

Komodo should deploy this service as a Docker Compose stack.

1. Publish the image to GHCR using the included GitHub Actions workflow.
2. In Komodo, create a stack from `compose.yaml`.
3. Set `GHCR_IMAGE` if you want to override the default package name. By default this stack pulls `ghcr.io/meaookung144/mos-bot:latest`.
4. Provide the same env vars shown in `.env.example`.
5. Keep the `/data` volume so prefix settings persist across restarts.

## GitHub Actions and GHCR

- `.github/workflows/ci.yml` runs lint, tests, and a Docker build check.
- `.github/workflows/publish-ghcr.yml` publishes images to GHCR on pushes to `main` and on version tags.

Published tags include:

- `latest` on the default branch
- `sha-<commit>`
- semver tags when you push git tags like `v2.0.0`
