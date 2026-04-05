async function respondPrefix(message, payload) {
  const items = Array.isArray(payload) ? payload : [payload];

  for (const item of items) {
    if (typeof item === "string") {
      await message.channel.send(item);
      continue;
    }

    await message.channel.send(item);
  }
}

async function respondInteraction(interaction, payload, fallbackEphemeral = false) {
  const items = Array.isArray(payload) ? payload : [payload];

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const basePayload =
      typeof item === "string"
        ? { content: item, ephemeral: fallbackEphemeral }
        : { ephemeral: fallbackEphemeral, ...item };

    if (index === 0) {
      if (interaction.deferred || interaction.replied) {
        await interaction.followUp(basePayload);
      } else {
        await interaction.reply(basePayload);
      }
      continue;
    }

    await interaction.followUp(basePayload);
  }
}

module.exports = {
  respondPrefix,
  respondInteraction
};
