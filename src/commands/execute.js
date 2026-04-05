const { hasPermission, permissionMessage } = require("./helpers");
const { respondInteraction, respondPrefix } = require("../utils/respond");

async function executeCommand(command, context) {
  if (!hasPermission(context, command)) {
    const message = permissionMessage(command);
    if (context.type === "slash") {
      await respondInteraction(context.interaction, message, true);
      return;
    }

    await respondPrefix(context.message, message);
    return;
  }

  try {
    const result = await command.execute(context);
    if (result == null) {
      return;
    }

    if (context.type === "slash") {
      await respondInteraction(context.interaction, result);
      return;
    }

    await respondPrefix(context.message, result);
  } catch (error) {
    const message = error.message || "Something went wrong while running this command.";
    if (context.type === "slash") {
      await respondInteraction(context.interaction, message, true);
      return;
    }

    await respondPrefix(context.message, message);
  }
}

module.exports = {
  executeCommand
};
