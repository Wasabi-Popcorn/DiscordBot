const Discord = require('discord.js');
const botInfo = require('./info.json');
const reactionhelper = require('./helpers/reactionHelper.js');
require('discord-reply');
require('dotenv').config();


const server = require('./server.js');
server();

console.log('From APP : Bot starting up');
const client = new Discord.Client();

// store all the command files in a collection
client.commands = new Discord.Collection();
const commandFiles = botInfo.commandFiles;
for (const f of commandFiles) {
  const command = require(`./commands/${f}`);
  client.commands.set(command.name, command);
}

// cronjob setup (for QOTD feature)
var CronJob = require('cron').CronJob;
new CronJob("00 00 00 * * *", function () {
  client.commands.get("qotd").execute(client, true, null, null)
}, null, true, "Atlantic/Reykjavik"); // Iceland (UTC time)


// Connection setup
client.once('ready', () => {
  console.log('Bot Online !!!');
});


//  process messages
const prefix = '-';
client.on('message', msg => {
  // prefixed commands
  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
      client.commands.get('ping').execute(msg, args);
    } else if (command === 'google' || command === 'g') {
      client.commands.get('google').execute(msg, args);
    } else if (command === 'delete' || command === 'del') {
      client.commands.get('delete').execute(msg, args, client);
    } else if (command === 'help' || command === 'h') {
      client.commands.get('help').execute(msg, args, commandFiles);
    } else if (command === 'joke' || command === 'j') {
      client.commands.get('joke').execute(msg);
    } else if (command === 'perms') {
      client.commands.get('perms').execute(msg, botInfo.serverId);
    } else if (command === 'ban') {
      client.commands.get('ban').execute(msg);
    } else if (command === 'qotd') {
      client.commands.get('qotd').execute(client, false, msg, args);
    }
  }

  // no-prefix commands
  if (msg.guild.id == botInfo.serverId) {
    reactionhelper.react(msg, client)
  }

  const bored = ["I'M BORED", 'IM BORED', 'IAM BORED', 'I AM BORED'];
  if (
    bored.some(e =>
      msg
        .toString()
        .toUpperCase()
        .includes(e)
    )
  ) {
    client.commands.get('bored').execute(msg);
  }
});

client.on('guildMemberAdd', member => {
  client.commands.get('welcome').execute(client, member);
});







client.login(process.env.BOT_TOKEN);