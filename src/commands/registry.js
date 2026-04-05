const { Collection } = require("discord.js");
const { commands } = require("./catalog");

function createRegistry() {
  const commandsByName = new Collection();
  const aliases = new Collection();

  for (const command of commands) {
    commandsByName.set(command.name, command);
    for (const alias of command.aliases) {
      aliases.set(alias, command.name);
    }
  }

  function resolve(name) {
    return commandsByName.get(name) || commandsByName.get(aliases.get(name));
  }

  return {
    all: commands,
    commandsByName,
    resolve
  };
}

module.exports = {
  createRegistry
};
