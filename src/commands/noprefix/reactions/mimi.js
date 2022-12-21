module.exports = {
  name: "mimi",
  type: "reaction",
  description: "just include any form of mimi variant in your message for a 🐈 reaction :)",
  sample: "mimi is annoying",
  permissions: null,
  execute(message) {
    let emoji = '🐈'

    const exist = message.guild.emojis.cache.find(e => e.id == '1046824247487647794');
    if (exist) emoji = '1046824247487647794'

    message.react(emoji);
  },
};
