module.exports = {
  name: "welcome",
  type: "managing",
  description: "A nice welcome message",
  sample: null,
  permissions: null,

  execute: (member) => {
    console.log(member.user.username + " joined in " + member.guild.name);
    const channel = member.guild.channels.cache.get("863391096985616396")

    if ((message.guild.id == "863391096461459457") && (Date.now() - member.user.createdTimestamp) < 432000000) {
      //delay 2 seconds
      setTimeout(function() {
        channel.send(`False alarm. It’s a new account so they got expelled`);
      }, 2000);
      return;
    };

    const mimi = member.guild.members.cache.get("478927225203326986");
    if (mimi && member.guild.id == "863391096461459457") {
      const isOnline = checkIfOnline(mimi, channel);
      if (channel && !isOnline) {
        const rolesChannel = "<#877692157757116486>";
        const coloursChannel = "<#864090868972912641>";
        const rulesChannel = "<#886944037708369930>";
        const introChannel = "<#930369859727015967>";
        channel.send(`Welcome <@!${member.id}>, fetch a few ${rolesChannel} and one from ${coloursChannel}. Do read the ${rulesChannel} and feel free to expose yourself in ${introChannel} <:wmufufu:916730920785027124>`);
      }
    } else {
      // send a normal message in the default server
      console.log(member.guild.systemChannel.send(`Welcome to the ${member.guild.name}, <@!${member.id}>`));
    }
  },
};

function checkIfOnline(mimi, channel) {
  if (mimi.presence.status == "online") {
    channel.send(`<@!${mimi.user.id}> , welcome the newbie lol`);
    return true;
  } else if (mimi.presence.status == "idle") {
    channel.send(`<@!${mimi.user.id}> , wake up !!! newbie here`);
    return true;
  }

  return false;
}
