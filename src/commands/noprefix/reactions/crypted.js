module.exports = {
    name: "crypted",
    type: "reaction",
    description: "use creepyted in sentence",
    sample: "creepy crypted is creepyted",
    permissions: null,
    execute(message) 
    {
        if (message.guild.id != "784882287640051723")
        return;
        let emoji = "👾";
        message.react(emoji);
    },

};