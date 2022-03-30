module.exports = {
  name: "min",
  type: "reaction",
  description: "use min in sentenceu",
  sample: "minmin is ghae",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    const exist = message.guild.emojis.cache.find(
      (e) => e.id == "958434232080941118"
    );
    if (exist) message.react("958434232080941118");
    else message.react("🧁");
  },
};
