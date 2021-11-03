const Discord = require("discord.js");
const fs = require('fs');
const server = require ('./server.js'); ////////

server(); /////////////

const client = new Discord.Client();

const prefix = "-";


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for(const f of commandFiles){
  const command = require(`./commands/${f}`);
  client.commands.set(command.name, command);
}

// Connection setup
client.once("ready", () => {
  console.log("Online BABEH !!!");
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === "ping") {
    client.commands.get("ping").execute(msg, args);
  }else if(command === "google"){
    client.commands.get("google").execute(msg, args);
  }else if(command === "help"){
    client.commands.get("help").execute(msg, args, commandFiles);
  } else {
    msg.channel.send("bonk !");
  }
});

client.login("ODAxNjk0MjA3NTA4NzQyMTU1.YAkZ6Q.IDy0vCu6DFjeqEg7x19Mshygv94");