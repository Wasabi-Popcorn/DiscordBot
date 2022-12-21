module.exports = {
  name: "wasabi",
  type: "reaction",
  description: "mention ze poppycorn or wasabi and you should get 🍿",
  sample: "degrade wasa from admins",
  permissions: null,
  execute(message) {
    // if (message.guild.id != "863391096461459457") return;
    let emoji = "🍿";
    message.react(emoji);
  },
};
