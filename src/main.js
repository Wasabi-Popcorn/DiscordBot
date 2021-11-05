const Discord = require("discord.js");
const botInfo = require("./info.json");
require("discord-reply");
require("dotenv").config();

console.log("From APP : Bot starting up");
const client = new Discord.Client();

const prefix = "-";

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

client.on("message", (msg) => {
  // prefixed commands
  if (msg.author.bot) return;

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
    } else if (command === "hedgy") {
      client.commands.get("hedgy").execute(msg);
    }
  }
  // no-prefix commands
  const hedgies = [
    "HEDGEHOG",
    "HEDGY",
    "HEDGIE",
    "HEDGE",
    "<@!867054837933015050>",
    "<@&864396826316374018>",
    "<@!711896924319645798>",
  ];
  if (hedgies.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("hedgy").execute(msg);
  }
  const katsies = ["KAT", "<@!633741451028594708>", "<@&867129131056889857>"];
  if (katsies.some((e) => msg.toString().toUpperCase().includes(e))) {
    client.commands.get("katsy").execute(msg);
  }

  console.log(msg.toString());
});

client.login(process.env.BOT_TOKEN);
