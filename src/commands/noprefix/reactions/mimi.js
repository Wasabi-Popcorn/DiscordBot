module.exports = {
  name: "mimi",
  type: "reaction",
  description:
    "just include any form of mimi variant in your message for a 🐈 reaction :)",
  sample: "mimi is annoying",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.name=='hehe_cat');
    if(exist)
      message.react('<:hehe_cat:863447972863934484>');
    else
      message.react('🐈');
  },
};
