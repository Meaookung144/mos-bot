const { once } = require("node:events");
const { createBot } = require("../src/bot");

async function main() {
  const bot = createBot();

  bot.client.login(bot.config.discordToken);
  await once(bot.client, "ready");
  await bot.syncCommands();
  console.log("Slash commands synchronized successfully.");
  await bot.client.destroy();
}

main().catch((error) => {
  console.error("Failed to sync slash commands.", error);
  process.exitCode = 1;
});
