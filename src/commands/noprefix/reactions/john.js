module.exports = {
  name: "john",
  type: "reaction",
  description: "use john in sentence",
  sample: "john is loud",
  permissions: null,
  execute(message) 
  {
      if (message.guild.id != "863391096461459457") return;
      let emoji = "🐼";
      message.react(emoji);
  },
};