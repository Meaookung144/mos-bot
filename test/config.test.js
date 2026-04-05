const test = require("node:test");
const assert = require("node:assert/strict");

test("loadConfig reads values from environment", async () => {
  process.env.DISCORD_TOKEN = "abc";
  process.env.OWNER_ID = "123";
  process.env.DEFAULT_PREFIX = "!";
  process.env.DATABASE_PATH = "./tmp/test.sqlite";
  process.env.SYNC_COMMANDS_ON_STARTUP = "false";

  delete require.cache[require.resolve("../src/config")];
  const { loadConfig } = require("../src/config");
  const config = loadConfig();

  assert.equal(config.discordToken, "abc");
  assert.equal(config.ownerId, "123");
  assert.equal(config.defaultPrefix, "!");
  assert.equal(config.databasePath, "./tmp/test.sqlite");
  assert.equal(config.syncCommandsOnStartup, false);
});
