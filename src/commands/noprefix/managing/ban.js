module.exports = {
  name: "ban",
  type: "managing",
  description: "",
  sample: "",
  permissions: ["BAN_MEMBERS"],

  execute: (msg) => {

    if (!msg.author.id == process.env.MY_DISCORD_ID || !msg.member.hasPermission("BAN_MEMBERS")) {
      return msg.lineReply("you can not ban members");
    } else if (!msg.guild.me.hasPermission("BAN_MEMBERS")) {
      return msg.lineReply("I do not have the permission to ban members");
    } else if(msg==''){
      return msg.lineReply("Please mention a user to ban");
    }

    let banMember = msg.guild.member(msg.mentions.users.first());
    if (!banMember) {
      msg.lineReply("member is not in the server");
      return;
    }
    banMember
      .ban()
      .then((kickInfo) => {
        console.log(`Banned ${kickInfo.user?.tag ?? kickInfo.tag ?? kickInfo}`);
        msg.lineReply(`Banned ${kickInfo.user?.tag ?? kickInfo.tag ?? kickInfo}`);
      })
      .catch((error) => {
        console.log("ERROR : " + error);
        // msg.lineReply("ERROR : " + error);
      });
  },
};
