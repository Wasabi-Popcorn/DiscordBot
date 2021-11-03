module.exports = {
  name : 'ping',
  description : 'ping for a pong ;)',
  sample:'sample command : -ping',
  execute(message , args) {
    // message.channel.send('pong !');
    message.lineReply('pong !');
  }
};