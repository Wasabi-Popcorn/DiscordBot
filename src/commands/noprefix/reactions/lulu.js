module.exports = {
  name: "lulu",
  type: "reaction",
  description: "include lulu related messges to get a 🥺",
  sample: "lulu likes cats",
  permissions: null,
  execute(message) {
    
    // if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='1056061349324668938');
    if(exist)
      message.react('1056061349324668938');
    else
      message.react('🥺');
  },
};
