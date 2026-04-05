const {
  EmbedBuilder,
  PermissionFlagsBits,
  SlashCommandBuilder
} = require("discord.js");
const { inspect } = require("node:util");

const permissionErrors = {
  admin: "You Don't have permissions.",
  owner: "You are not owner!"
};

function sanitizeEvalOutput(text, config) {
  return String(text)
    .replaceAll(config.discordToken, "[REDACTED_TOKEN]")
    .replaceAll(process.env.DISCORD_TOKEN || "", "[REDACTED_TOKEN]");
}

function formatCodeBlock(label, value) {
  const text = String(value).slice(0, 1900);
  return `\`\`\`${label}\n${text}\n\`\`\``;
}

function addOption(builder, option) {
  if (option.type === "number") {
    return builder.addNumberOption((input) =>
      input
        .setName(option.name)
        .setDescription(option.description)
        .setRequired(Boolean(option.required))
    );
  }

  return builder.addStringOption((input) =>
    input
      .setName(option.name)
      .setDescription(option.description)
      .setRequired(Boolean(option.required))
  );
}

function buildSlashData(command) {
  const builder = new SlashCommandBuilder()
    .setName(command.name)
    .setDescription(command.description);

  for (const option of command.options || []) {
    addOption(builder, option);
  }

  return builder;
}

function createTextCommand(definition) {
  return {
    ...definition,
    aliases: definition.aliases || [],
    options: definition.options || [],
    slashData: buildSlashData(definition)
  };
}

function isOwner(context) {
  return context.user?.id === context.config.ownerId;
}

function isAdmin(context) {
  if (!context.memberPermissions) {
    return false;
  }

  return context.memberPermissions.has(PermissionFlagsBits.Administrator);
}

function permissionMessage(command) {
  return permissionErrors[command.permission] || "You don't have permission to use this command.";
}

function hasPermission(context, command) {
  if (command.permission === "owner") {
    return isOwner(context);
  }

  if (command.permission === "admin") {
    return isAdmin(context);
  }

  return true;
}

function buildEvalEmbed({ code, output, title, footer }) {
  return {
    embeds: [
      new EmbedBuilder()
        .setTitle(title)
        .addFields(
          { name: "Input", value: formatCodeBlock("js", code) },
          { name: "Output", value: formatCodeBlock("txt", output) }
        )
        .setFooter({ text: footer })
    ]
  };
}

function formatEvalValue(value) {
  return inspect(value, { depth: 2 }).slice(0, 1900) || "undefined";
}

function readOption(context, optionName, fallbackIndex = 0) {
  if (context.type === "slash") {
    return context.options.get(optionName)?.value ?? null;
  }

  return context.args[fallbackIndex] ?? null;
}

module.exports = {
  buildEvalEmbed,
  createTextCommand,
  formatEvalValue,
  hasPermission,
  permissionMessage,
  readOption,
  sanitizeEvalOutput
};
