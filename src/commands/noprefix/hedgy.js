module.exports = {
  name: "hedgy",
  type: "noprefix",
  description:
    "just include any form of hedgehog variant in your message for a 🦔 reaction :)",
  sample: "Hedgehogs are smeshy",
  permissions: null,
  execute(message) {
    if (message.guild.id != "863391096461459457") return;
    let emoji = "🦔";
    message.react(emoji);
  },
};
