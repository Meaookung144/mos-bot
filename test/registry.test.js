const test = require("node:test");
const assert = require("node:assert/strict");
const { createRegistry } = require("../src/commands/registry");

test("registry exposes prefix and slash commands", async () => {
  const registry = createRegistry();

  assert.ok(registry.resolve("pay"));
  assert.ok(registry.resolve("prefix"));
  assert.ok(registry.all.every((command) => command.slashData));
});
