module.exports = {
    name: "hani",
    type: "reaction",
    description: "use hani in sentence",
    sample: "hani honey, no",
    permissions: null,
    execute(message) 
    {
        if (message.guild.id != "863391096461459457")
        return;
        let emoji = "🍯";
        message.react(emoji);
    },
};