module.exports = {
  name: "logan",
  type: "reaction",
  description:
    "just include any form of logan variant in your message for a 🐺 reaction :)",
  sample: "Dont go near logan",
  permissions: null,
  execute(message) {
    // if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='1017125020474036315');
    if(exist)
      message.react('1017125020474036315');
    else
      message.react('🐺');
  },
};
