module.exports = {
  name : 'google',
  description : 'Make a google search with this command',
  sample: 'sample command : `-google wikipedia` or `-g wikipedia`',
  execute(message , args) {
    // message.channel.send(`https://www.google.com/search?q=${args.join('+')}`);
    message.lineReply(`https://www.google.com/search?q=${args.join('+')}`);
  }
};