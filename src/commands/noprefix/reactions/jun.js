module.exports = {
  name: "jun",
  type: "reaction",
  description: "include jun in your message for a sip reaction :)",
  sample: "jun, please stop talking",
  permissions: null,
  execute(message) {
    const exist = message.guild.emojis.cache.find(e=>e.id=='1016141899976941578');
    if(exist)
      message.react('1016141899976941578');
    else
      message.react('🍵');
  },
};
