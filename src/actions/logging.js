function logger(client, message, count, localChannel) {
  const obj = {
    operation: "delete",
    user: {
      name: message.author.username,
      ID: message.author.id
    },
    server: {
      name: message.guild.name,
      ID: message.guild.id,
    },
    channel: {
      name: message.channel.name,
      ID: message.channel.id,
    },
    localLogsChannel : localChannel ? true : false,
    deleted: count,
    time: new Date().toLocaleTimeString(),
  };

  const content = "```" + JSON.stringify(obj, null, 4) + "```";
  myChannel = client.guilds.cache
                .find((s) => s.id === process.env.MY_GUILD_ID)
                .channels.cache
                .find((c) => c.id === process.env.MY_LOG_CHANNEL_ID);
    
    myChannel.send(content).then(console.log("message sent to my channel"));
    if(localChannel && localChannel.id != process.env.MY_LOG_CHANNEL_ID){
      localChannel.send(content).then(console.log("message sent to local channel"));
    }
}

module.exports = logger;