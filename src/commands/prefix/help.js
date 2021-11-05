module.exports = {
  name: "help",
  type:'prefix',
  description: "Help command for displaying all the available commands",
  sample: "sample command : `-help` or `-h`",
  permissions: null,
  execute(message, args, commandFiles) {
    var toSend = "";
    for (const f of commandFiles) {
      const command = require(`../${f}`);
      if(command.type === 'prefix')
        toSend += "`-" + command.name + "` \t=> " + command.description + "\n";
      // else if(command.type === 'noprefix')
      //   toSend += `\`${command.name}\`\t=> ${command.description}\n`
    }

    message.lineReply(toSend);
  },
};
