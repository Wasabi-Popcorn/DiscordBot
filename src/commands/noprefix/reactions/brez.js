module.exports = {
  name: "brez",
  type: "reaction",
  description: "use brez in sentence",
  sample: "brez is berry kind",
  permissions: null,
  execute(message) 
  {
      if (message.guild.id != "1036994003066949714") return;
      let emoji = "🦦";
      message.react(emoji);
  },

}; 