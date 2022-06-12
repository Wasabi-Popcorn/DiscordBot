const fs = require('fs');

module.exports = {
  name: "qotd",
  type: "both",
  description: "Question Of The Day feature",
  sample: "-qotd",

  execute: (client, automated, msg, args) => {
    
    if(!msg.guild.id=="863391096461459457") return;

    // check for wrong channel
    if(msg!=null && msg.channel.id!='973679064453877820') {
      msg.lineReply(`Please use the command in the appropriate channel - <#973679064453877820>`);
      return;
    }

    // check if the execute method was triggered with '-qotd push' and has admin perms
    // if either fails, else block called
    if(msg!=null && args!=null){    // makes sure this isnt called by cron
      if(args.length>0){            // incase of any additional args present
        if(args.shift().toLowerCase()=='push' 
          && (msg.member.hasPermission('ADMINISTRATOR') || msg.author.id=='670228251821735966')){
            // msg.lineReply('Gotcha');
            automated=true;
        } else{
          msg.lineReply('Either You dont have the permission to use this command or it is invalid')
          return;
        }
      }
    }

    // get the right channel for embed
    const guild = client.guilds.cache.find((s) => s.id === "863391096461459457");
    const channel = guild.channels.cache.find((c) => c.id === "973679064453877820");
    const btn = guild.emojis.cache.find((e) => e.id === "973962648729301042");

    /** Getting today's QOTD **/
    sendQOTD(automated, channel, btn);
  },
};

function sendQOTD(automated, channel, btn){
  /** Getting today's QOTD **/
  const file = "src/commands/both/qotd/qotd.json";
  if (automated) {
    var jsonObject = JSON.parse(fs.readFileSync(file.toString()));
    jsonObject.today++;
    fs.writeFileSync(file, JSON.stringify(jsonObject));
  };

  var jsonObject2 = JSON.parse(fs.readFileSync(file.toString()));

  let question = jsonObject2.questions[jsonObject2.today%jsonObject2.questions.length];

  var embed = {
    embed: {
      color: "023673",
      title: `__**Todays Question Of The Day:**__`,
      description: `\n${btn} **${question}**\n`,
      image: {
        url: "https://i.ibb.co/kXLSZtz/blue-line.png"
    }
    },
  };

  if (!automated) {
    channel.send(embed);
    return;
  }
  channel.send("https://i.ibb.co/xD1xRpm/qotd.png");
  channel.send(embed);
}