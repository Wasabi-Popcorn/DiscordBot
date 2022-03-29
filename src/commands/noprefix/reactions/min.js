module.exports = {
    name: "min",
    type: "reaction",
    description: "use min in sentenceu",
    sample: "minmin is ghae",
    permissions: null,
    execute(message) 
    {
        if(message.guild.id != "863391096461459457")
        return;
        const exist = message.guild.emojis.cache.find(e=>e.name=='kittydance');
        if(exist)
        message.react('<:kittydance:958434232080941118>');
        else
        message.react('🧁')},
};