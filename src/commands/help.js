module.exports = {
  name: "help",
  description: "Help command for displaying all the available commands",
  sample: "sample command : `-help` or `-h`",
  permissions: null,
  execute(message, args, commandFiles) {
    var toSend = "";
    for (const f of commandFiles) {
      const command = require(`./${f}`);
      toSend += "`-" + command.name + "` \t=> " + command.description + "\n";
    }

    message.lineReply(toSend);
  },
};
