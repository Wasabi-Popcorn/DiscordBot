module.exports = {
  name : 'google',
  description : 'Make a google search with this command',
  execute(message , args) {
    // message.channel.send(`https://www.google.com/search?q=${args.join('+')}`);
    message.reply(`https://www.google.com/search?q=${args.join('+')}`);
  }
};