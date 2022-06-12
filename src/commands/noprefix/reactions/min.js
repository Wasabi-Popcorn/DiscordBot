module.exports = {
  name: "min",
  type: "reaction",
  description: "use min in sentenceu",
  sample: "minmin is ghae",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    const exist = message.guild.emojis.cache.find(
      (e) => e.id == "978096045726789632"
    );
    if (exist) message.react("978096045726789632");
    else message.react("🧁");
  },
};