module.exports = {
  name: "ilo",
  type: "reaction",
  description: "include ilo related messges to get a 🦝",
  sample: "Do not talk to ilo",
  permissions: null,
  execute(message) {
    
    // if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='918993655983911013');
    if(exist)
      message.react('918993655983911013');
    else
      message.react('🦝');
  },
};
