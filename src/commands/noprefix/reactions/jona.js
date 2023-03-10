module.exports = {
    name: "jona",
    type: "reaction",
    description: "use jona in sentence",
    sample: "jona the kItTeN",
    permissions: null,
    execute(message) 
    {
        // if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='1046548200137429094');
    if(exist)
      message.react('1046548200137429094');
    else
      message.react("🤖");
    },
};