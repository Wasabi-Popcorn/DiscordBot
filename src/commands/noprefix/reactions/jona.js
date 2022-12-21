module.exports = {
    name: "jona",
    type: "reaction",
    description: "use jona in sentence",
    sample: "jona the kItTeN",
    permissions: null,
    execute(message) 
    {
        // if (message.guild.id != "863391096461459457") return;
    const exist =  message.guild.emojis.cache.find(e=>e.id=='874778347790553108');
    if(exist)
      message.react('874778347790553108');
    else
      message.react("🤖");
    },
};