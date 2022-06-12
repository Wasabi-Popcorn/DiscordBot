module.exports = {
  name: "katsy",
  type: "reaction",
  description: "just include kat in your message for a 🐈‍⬛ reaction :)",
  sample: "dont trust kat",
  permissions: null,
  execute(message) {

    return;
    
    if (message.guild.id != "863391096461459457") return;
    let emoji = "🐈‍⬛";
    message.react(emoji);
  },
};
