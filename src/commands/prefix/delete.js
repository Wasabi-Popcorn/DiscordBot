const logger = require('../../actions/logging.js');

module.exports = {
    name: "delete",
    type:'prefix',
    description: "deletes last `<n>` messages.",
    sample: "sample command : `-delete 10` or `-del 10`",
    permissions:["MANAGE_MESSAGES"],
    execute(message, args, client) {
        if (!args[0])
            return message.lineReply(
                "Please enter the amount of messages you want to delete"
            );
        if (isNaN(args[0]) || args[0] > 20) {
            return message.lineReply(
                "Please give a valid argument(from 1 to 20)\n" + this.sample
            );
        }
        if (args[0] < 1) {
            return message.lineReply("https://ibb.co/dG8qm4M");
        }
        if (!message.member.guild.me.hasPermission('MANAGE_MESSAGES')) {
            return message.lineReply("The admins didnt give me permission to delete :pensive: , bad people");
        }
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.lineReply("oops! You do not have the permission :stuck_out_tongue:");
        } else{
            return deleteMessage(message, args, client);
        }
    }
};

function deleteMessage(message, args, client) {
    args[0]++;
    
    message.channel.bulkDelete(args[0], true)
        .then((messages) => {
            console.log("message deleted : " + messages.size + 
            " by " + message.author.username + 
            ", from server : "+message.channel.guild.name);
            const channel = message.guild.channels.cache.find((channel) => channel.name === "logs");
            
            // calling the logger method
            logger(client, message, --args, channel);
        });
}