const Discord = require("discord.js");
const fs = require("fs");
const { BOT_TOKEN } = require('./commands/info.json');

console.log("From APP : Bot starting up");
const client = new Discord.Client();

const prefix = "-";

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
//   .filter((file) => file.endsWith(".js"));
// var commandFiles = []
// fs.readdir("./commands/", function (err, files) {
//   if (err) return console.log('Unable to scan directory: ' + err);
//   files.forEach(function (file) {
//       commandFiles.push(file);
//       console.log(file);
//   });
// });

for (const f of commandFiles) {
  const command = require(`./commands/${f}`);
  client.commands.set(command.name, command);
}

// Connection setup
client.once("ready", () => {
  console.log("Bot Online !!!");
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(msg, args);
  }
   else if (command === "google") {
    client.commands.get("google").execute(msg, args);
  } else if (command === "help") {
    client.commands.get("help").execute(msg, args, commandFiles);
  } else {
    msg.channel.send("bonk !");
  }
});

client.login(BOT_TOKEN);
