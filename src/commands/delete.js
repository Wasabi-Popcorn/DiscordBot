const { MY_DISCORD_ID } = require("../info.json");

module.exports = {
  name: "delete",
  description: "deletes last `<n>` messages.",
  sample: "sample command : `-delete 10` or `-del 10`",
  async execute(message, args, client) {
    if (!args[0])
      return message.lineReply("Please enter the amount of messages you want to delete");
    if (isNaN(args[0]) || args[0] > 20) {
      return message.lineReply("Please give a valid argument(from 1 to 20)\n" + this.sample);
    }
    if(args[0] < 1){
      return message.lineReply("https://ibb.co/dG8qm4M");
    }
    if (message.author.id === MY_DISCORD_ID) {
      deleteMessage(message, args, client);
      return;
    }
  },
};

function deleteMessage(message, args, client) {
  args[0]++;
  message.channel.bulkDelete(args[0])
  .then(messages => {
    console.log("message deleted : " + messages.size + " by " + message.author.username);
    const channel = client.channels.cache.find(channel => channel.name === "logs");
    if (channel) {
      channel.send(
        "message deleted in channel : #" +
          message.channel.name +
          " \n`Count :" +
          --args[0] +
          "`, `Username : " +
          message.author.username +
          "`, `ID : " +
          message.author.id +
          "`"
        );
      }      
  }).catch(console.error());
}