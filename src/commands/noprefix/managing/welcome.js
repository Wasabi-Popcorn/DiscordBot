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
    if (member.guild.id != "863391096461459457") {
      const mssg = `Welcome to the ${member.guild.name}, <@!${member.id}>`;
      const sysChannel = member.guild.systemChannel;
      console.log(
        sysChannel ? sysChannel.send(mssg)
          : "No system channel present, so no message sent to the server.\nMessage :"+mssg
      );
      return;
    }

    const channel = member.guild.channels.cache.get("863391096985616396")

    // check if less than 5days old
    if ((Date.now() - member.user.createdTimestamp) < 432000000) {
      //delay 2 seconds
      setTimeout(()=> {
        if(channel){
          channel.send(`False alarm. It's a new account so they got expelled`);
        }
      }, 2000);
      return;
    };

    // check if mimi is online
    const mimi = member.guild.members.cache.get("478927225203326986");
    if (mimi) {
      const isOnline = checkIfOnline(mimi, channel);
      if (channel && !isOnline) {
        sendWelcomeMessage(client, member, channel);
      }
    } else {
      // send a normal message in the default channel
      
    }

    // tag the newbie after sometime
    setTimeout(()=>{
      sendTimeOutMessage(client, member.guild, channel, member);
    }, 1.5 * 60 * 1000) // 1.5 minutes (minutes * seconds * milliseconds)
  }
};

function checkIfOnline(mimi, channel) {
  if (mimi.presence.status == "online") {
    channel.send(`<@!${mimi.user.id}> , Welcome the newbie lol`);
    return true;
  } else if (mimi.presence.status == "idle") {
    channel.send(`<@!${mimi.user.id}> , Wake up !!! Newbie here`);
    return true;
  }

  return false;
}

function sendWelcomeMessage(client, member, channel) {
  const rolesChannel = "<#877692157757116486>";
  const coloursChannel = "<#948667182735306832>";
  const rulesChannel = "<#886944037708369930>";
  const introChannel = "<#930369859727015967>";
  // return `Welcome <@!${member.id}>, fetch a few ${rolesChannel} and one from ${coloursChannel}. Do read the ${rulesChannel} and feel free to expose yourself in ${introChannel} <:wmufufu:916730920785027124>`;
  channel.send(`Welcome ${member.toString()}`, {
    embed: {
      color:'RANDOM',
      title: `Welcome to ${member.guild.name} !`,
      fields: [
        {
          name: `Tell us about yourself`,
          value: `Welcome ${member.toString()}, fetch a few ${rolesChannel} and one from ${coloursChannel}. Do read the ${rulesChannel} and feel free to expose yourself in ${introChannel} <:wmufufu:916730920785027124>`,
        },
      ],
      thumbnail: {
        url : member.guild.iconURL() ? member.guild.iconURL() : client.user.avatarURL(),
      },
      footer: {
        icon_url: client.user.avatarURL(),
        text: `${member.guild.name}, since the beginning of time`,
      },
    },
  });
}

function sendTimeOutMessage(client, guild, channel, member) {
  // true - user has left before the timout period
  if (!guild.members.cache.get(member.id)) return;

  const question = questions[Math.floor(Math.random() * questions.length)];

  // system channel exist -
  channel.send(`<@!${member.id}> , hello there`, {
    embed: {
      color:'RANDOM',
      title: `Welcome to ${member.guild.name} !`,
      fields: [
        {
          name: `Few questions to get you started`,
          value: `1. How old are you?\nFirst question is mandatory\n--------------------------\n2. Where are you from?\n3. ${question}`,
        },
      ],
      thumbnail: {
        url : member.guild.iconURL() ? member.guild.iconURL() : client.user.avatarURL(),
      },
      footer: {
        icon_url: client.user.avatarURL(),
        text: `(ignore if already answered)`,
      },
    },
  });
}
