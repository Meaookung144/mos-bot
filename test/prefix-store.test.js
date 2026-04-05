const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { PrefixStore } = require("../src/storage/prefix-store");

test("PrefixStore returns default prefix and persists updates", async () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "mos-bot-"));
  const store = new PrefixStore(path.join(tempDir, "bot.sqlite"), ".");

  assert.equal(store.getPrefix("guild-1"), ".");
  store.setPrefix("guild-1", "!");
  assert.equal(store.getPrefix("guild-1"), "!");
});
