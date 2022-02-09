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
    }
  }
  // no-prefix commands
  const hedgies = [
    "HEDGEHOG",
    "HEDGY",
    "HEDGIE",
    "HEDGE",
    "YASMINE",
    "YAS",
    "<@!867054837933015050>",
    "<@!711896924319645798>",
    "<@!351429180954640384>",
    "<@867054837933015050>",
    "<@711896924319645798>",
    "<@351429180954640384>",
    "<@&864396826316374018>",
    "<@&908490807110160426>",
  ];
  if (hedgies.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("hedgy").execute(msg);
  }
  const katsies = [
    "KAT",
    "<@!633741451028594708>",
    "<@633741451028594708>",
    "<@&867129131056889857>",
  ];
  if (katsies.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("katsy").execute(msg);
  }
  const ehas = [
    "EHA",
    "<@!746564188909862942>",
    "<@746564188909862942>",
    "<@&854779272819507221>",
  ];
  if (ehas.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("eha").execute(msg);
  }
  const mimis = [
    "MIMI",
    "MIIMII",
    "MOMO",
    "<@!478927225203326986>",
    "<@478927225203326986>",
  ];
  if (mimis.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("mimi").execute(msg);
  }
  const logans = [
    "LOGAN",
    "<@!569485658461306880>",
    "<@569485658461306880>",
    "<@&867129013645213716>",
  ];
  if (logans.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("logan").execute(msg);
  }
  const wasabii = [
    "WASA",
    "POPPY",
    "POPCORN",
    "<@!670228251821735966>",
    "<@670228251821735966>",
  ];
  if (wasabii.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("wasabi").execute(msg);
  }
  const ilos = [
    "ILO",
    "OUI",
    "<@!434814313715335180>",
    "<@434814313715335180>",
  ];
  if (ilos.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("ilo").execute(msg);
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
