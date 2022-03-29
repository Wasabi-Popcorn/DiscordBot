module.exports = {
    name: "brez",
    type: "reaction",
    description: "use brez in sentence",
    sample: "brez is berry kind",
    permissions: null,
    execute(message) 
    {
        if (message.guild.id != "863391096461459457")
        return;
        let emoji = "🦦";
        message.react(emoji);
    },

};