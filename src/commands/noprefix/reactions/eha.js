module.exports = {
  name: "eha",
  type: "reaction",
  description:
    "just include any form of eha variant in your message for a 🐶 reaction :)",
  sample: "what is this behaviour eha?",
  permissions: null,
  execute(message) {
    // if(message.guild.members.cache.find('746564188909862942') == undefined) return;
    if (message.guild.id != "841847134696898600") return;
    const exist =  message.guild.emojis.cache.find(e=>e.name=='applecatto');
    if(exist)
      message.react('<:applecatto:885601985674510337>');
    else
      message.react('🐶');
  },
};
