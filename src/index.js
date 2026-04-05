const { createBot } = require("./bot");

async function main() {
  const bot = createBot();
  await bot.start();
}

main().catch((error) => {
  console.error("Fatal startup error:", error);
  process.exitCode = 1;
});
