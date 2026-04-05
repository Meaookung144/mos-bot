const { REST, Routes } = require("discord.js");

async function syncCommands({ client, config, registry }) {
  const rest = new REST({ version: "10" }).setToken(config.discordToken);
  const body = registry.all.map((command) => command.slashData.toJSON());

  if (config.guildId) {
    await rest.put(
      Routes.applicationGuildCommands(client.user.id, config.guildId),
      { body }
    );
    return { scope: "guild", guildId: config.guildId, count: body.length };
  }

  await rest.put(Routes.applicationCommands(client.user.id), { body });
  return { scope: "global", count: body.length };
}

module.exports = {
  syncCommands
};
