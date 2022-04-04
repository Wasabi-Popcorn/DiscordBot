module.exports = {
    name: "hani",
    type: "reaction",
    description: "use hani in sentence",
    sample: "hani honey, no",
    permissions: null,
    execute(message) 
    {
        if (message.guild.id != "658280680039383051")
        return;
        let emoji = "🍯";
        message.react(emoji);
    },

};