module.exports = {
    name: "perms",
    type: 'prefix',
    description: "To display a message describing access permission",
    sample: "sample command : `-perms`",
    permissions: null,
    execute(message, hideoutGuildId) {

        // if message is not from hideout, return
        if(message.guild.id != hideoutGuildId)
            return
        
        let voteChannel = "1049567455518916629"
        let toSend = `You need to level up to be able to join in VC or have Pic perms\n`
            + `- Vc Acces - Level 5\n`
            + `- Pic perms - Level 8\n`
            + `Or you can vote for us on top.gg to get temporary perms <#${voteChannel}> (VC and Pic perms)`;

        message.lineReply(toSend);
    },
};
