module.exports = {
  name: "google",
  type:'prefix',
  description: "Make a google search with this command",
  sample: "sample command : `-google wikipedia` or `-g wikipedia`",
  permissions: null,
  execute(message, args) {
    message.lineReply(`https://www.google.com/search?q=${args.join("+")}`);
  },
};
