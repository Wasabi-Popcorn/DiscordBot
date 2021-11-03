module.exports = {
  name: "help",
  description: "Help command for displaying all the available commands",
  execute(message, args, commandFiles) {
    
    var toSend = "";
    for (const f of commandFiles) {
      const command = require(`./${f}`);
      toSend += "```-"+command.name + "``` => " + command.description + "\n";
    }

    message.channel.send(toSend);
  },
};
