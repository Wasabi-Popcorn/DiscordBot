module.exports = {
  name: "mimi",
  type: "reaction",
  description:
    "just include any form of mimi variant in your message for a 🐈 reaction :)",
  sample: "mimi is annoying",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.name=='boop_cat');
    if(exist)
      message.react('<:boop_cat:906870845870329866>');
    else
      message.react('🐈');
  },
};
