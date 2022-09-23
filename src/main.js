const Discord = require("discord.js");
const botInfo = require("./info.json");
require("discord-reply");
require("dotenv").config();

const server = require("./server.js");
server();

console.log("From APP : Bot starting up");
const client = new Discord.Client();

// store all the command files in a collection
client.commands = new Discord.Collection();
const commandFiles = botInfo.commandFiles;
for (const f of commandFiles) {
  const command = require(`./commands/${f}`);
  client.commands.set(command.name, command);
}

/** cronjob setup (for QOTD feature) **/
var CronJob = require('cron').CronJob;
new CronJob("00 00 00 * * *", function(){client.commands.get("qotd").execute(client,true,null,null)}, null, true, "Atlantic/Reykjavik"); // Iceland (UTC time)

// new CronJob("*/5 05 12 * * *", function(){client.commands.get("qotd").execute(client,true)}, null, true, "Asia/Kolkata"); // Iceland (UTC time)

// Connection setup
client.once("ready", () => {
  console.log("Bot Online !!!");
});

//  process messages
const prefix = "-";
client.on("message", (msg) => {
  // prefixed commands
  if (msg.author.bot) {
    if (msg.author.id == "204255221017214977") {
      client.commands.get("leave").execute(msg);
    }

    return;
  }

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
      client.commands.get("ping").execute(msg, args);
    } else if (command === "google" || command === "g") {
      client.commands.get("google").execute(msg, args);
    } else if (command === "delete" || command === "del") {
      client.commands.get("delete").execute(msg, args, client);
    } else if (command === "help" || command === "h") {
      client.commands.get("help").execute(msg, args, commandFiles);
    } else if (command === "dadjoke" || command === "dj") {
      client.commands.get("dadjoke").execute(msg);
    } else if (command === "ban") {
      client.commands.get("ban").execute(msg);
    } else if (command === "qotd") {
      client.commands.get("qotd").execute(client, false, msg, args);
    }
  }
  
  
  
  // no-prefix commands
  const hedgies = [
    /\bhedg\b/i,
    /\byas(mine)?\b/i,
    /867054837933015050/,
    /711896924319645798/,
    /351429180954640384/,
    /864396826316374018/,
    /908490807110160426/
  ];
  if (hedgies.some((r) => r.test(msg))) {
    client.commands.get("hedgy").execute(msg);
  }
  const katsies = [
    /\bkat\b/i,
    /633741451028594708/,
    /867129131056889857/
  ];
  if (katsies.some((r) => r.test(msg))) {
    client.commands.get("katsy").execute(msg);
  }
  const ehas = [
    /\beha\b/i,
    /746564188909862942/,
    /854779272819507221/
  ];
  if (ehas.some((r) => r.test(msg))) {
    client.commands.get("eha").execute(msg);
  }
  const mimis = [
    /\bmimi\b/i,
    /\bmiimii\b/i,
    /\bmomo\b/i,
    /478927225203326986/
  ];
  if (mimis.some((r) => r.test(msg))) {
    client.commands.get("mimi").execute(msg);
  }
  const logans = [
    /\blogan\b/i,
    /\bloggy\b/i,
    /569485658461306880/,
    /867129013645213716/
  ];
  if (logans.some((r) => r.test(msg))) {
    client.commands.get("logan").execute(msg);
  }
  const wasabii = [
    /\bwasa(bi)?\b/i,
    /\bpopcorn\b/i,
    /\bpoppy\b/i,
    /670228251821735966/,
    /906110667189276702/
  ];
  if (wasabii.some((r) => r.test(msg))) {
    client.commands.get("wasabi").execute(msg);
  }
  const ilos = [
    /\bilo(na)?\b/i,
    /\bchonki\b/i,
    /434814313715335180/,
  ];
  if (ilos.some((r) => r.test(msg))) {
    client.commands.get("ilo").execute(msg);
  }
  const mins = [
    /\bminmin\b/i,
    /661102017422426123/,
    /871000910543880202/
  ];
  if (mins.some((r) => r.test(msg))) {
    client.commands.get("min").execute(msg);
  }
  const brezs = [
    /\bbrez\b/i,
    /\bbretzel\b/i,
    /266656070728941569/
  ];
  if (brezs.some((r) => r.test(msg))) {
    client.commands.get("brez").execute(msg);
  }
  const johns = [
    /\bjohn(o)?\b/i,
    /531984504395530250/
  ];
  if (johns.some((r) => r.test(msg))) {
    client.commands.get("john").execute(msg);
  }
  const jonas = [
    /\bjona\b/i,
    /766173503517884417/
];
if(jonas.some((r) => r.test(msg))) {
  client.commands.get("jona").execute(msg);
}
const hanis = [
    /\bhani\b/i,
    /\bhoney\b/i,
    /\bhan-e\b/i,
    /\btypo queen\b/i,
    /658280680039383051/
];
if(hanis.some((r) => r.test(msg))) {
  client.commands.get("hani").execute(msg);
}
  const shanes = [
    /\bshane\b/i,
    /\bwalrus\b/i,
    /186128844418187264/
];
if(shanes.some((r) => r.test(msg))) {
  client.commands.get("shane").execute(msg);
}
  const juns = [
    /\bjun\b/i,
    /\bc2\b/i,
    /992082377679577128/,
    /842598410552475658/
];
if(juns.some((r) => r.test(msg))) {
  client.commands.get("jun").execute(client, msg);
}

  const bored = ["I'M BORED", "IM BORED", "IAM BORED", "I AM BORED"];
  if (bored.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("bored").execute(msg);
  }
});

client.on("guildMemberAdd", (member) => {
  client.commands.get("welcome").execute(client, member);
});

client.login(process.env.BOT_TOKEN);
