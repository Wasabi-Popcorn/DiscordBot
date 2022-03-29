module.exports = {
  name: "mimi",
  type: "reaction",
  description: "just include any form of mimi variant in your message for a 🐈 reaction :)",
  sample: "mimi is annoying",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='932267101945745438');
    if(exist)
      message.react('932267101945745438');
    else
      message.react('🐈');
  },
};
