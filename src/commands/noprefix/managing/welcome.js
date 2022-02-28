const questions = require('./questions.json');

module.exports = {
  name: "welcome",
  type: "managing",
  description: "A nice welcome message",
  sample: null,
  permissions: null,
  // cooldown: 1.5 * 60 * 1000, // 3 minutes (minutes * seconds * milliseconds)

  execute: (client, member) => {
    console.log(member.user.username + " joined in " + member.guild.name);

    // if not 'The Hideout', return
    if (member.guild.id != '863391096461459457') return;

    const channel = member.guild.channels.cache.get("863391096985616396")

    // check if less than 5days old
    if ((member.guild.id == "863391096461459457") && (Date.now() - member.user.createdTimestamp) < 432000000) {
      //delay 2 seconds
      setTimeout(() => {
        if (channel) {
          channel.send(`False alarm. It’s a new account so they got expelled`);
        }
      }, 2000);
      return;
    };

    // check if mimi is online
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
      // send a normal message in the default channel
      console.log(member.guild.systemChannel.send(`Welcome to the ${member.guild.name}, <@!${member.id}>`));
    }

    // tag the newbie after sometime
    setTimeout(() => {
      sendMessage(client, member.guild, channel, member);
    }, 1.5 * 60 * 1000) // 1.5y minutes (minutes * seconds * milliseconds)
  }
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

function sendMessage(client, guild, channel, member) {
  // true - user has left before the timout period
  if (!guild.members.cache.get(member.id)) return;

  const question = questions[Math.floor(Math.random() * questions.length)];

  // system channel exist -
  channel.send(`<@!${member.id}> , hello there`, {
    embed: {
      title: `welcome to ${member.guild.name} !`,
      fields: [
        {
          name: `Few questions to get you started`,
          value: `1. How old are you \n2. Where are you from \n3. ${question}`,
        },
      ],
      footer: {
        icon_url: client.user.avatarURL(),
        text: `(ignore if already answered)`,
      },
    },
  });
}