module.exports = {
  name: "hedgy",
  type: "reaction",
  description:
    "just include any form of hedgehog variant in your message for a 🦔 reaction :)",
  sample: "Hedgehogs are smeshy",
  permissions: null,
  execute(message) {
    // if (message.guild.id != "1036994003066949714") return;
    let emoji = "🦔";
    message.react(emoji);
  },
};
