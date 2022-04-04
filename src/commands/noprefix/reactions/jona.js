module.exports = {
    name: "jona",
    type: "reaction",
    description: "use jona in sentence",
    sample: "jona the kItTeN",
    permissions: null,
    execute(message) 
    {
        if (message.guild.id != "766173503517884417")
        return;
        let emoji = "🤖";
        message.react(emoji);
    },

};