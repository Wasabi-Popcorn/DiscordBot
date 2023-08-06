module.exports = {
  name: "kim",
  type: "reaction",
  description: "mention ze poppycorn or kim and you should get 🦍",
  sample: "kim is pretty loud, watch out!",
  permissions: null,
  execute(message) {
    console.log(message)
    let emoji = "🦍";

    const exist = message.guild.emojis.cache.find(e => e.id == '1054390224597286953');
    if (exist) emoji = '1054390224597286953'
    
    message.react(emoji);
  },
};
