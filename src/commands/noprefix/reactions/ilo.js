module.exports = {
  name: "ilo",
  type: "reaction",
  description: "include ilo related messges to get a 🦝",
  sample: "Do not talk to ilo",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    let emoji = "🦝";
    message.react(emoji);
  },
};
