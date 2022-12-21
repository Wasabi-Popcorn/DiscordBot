module.exports = {
  name: "eha",
  type: "reaction",
  description:
    "just include any form of eha variant in your message for a 🐶 reaction :)",
  sample: "what is this behaviour eha?",
  permissions: null,
  execute(message) {
    // if(message.guild.members.cache.find('746564188909862942') == undefined) return;
    // if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='874807851737030696');
    if(exist)
      message.react('874807851737030696');
    else
      message.react('🐶');
  },
};
