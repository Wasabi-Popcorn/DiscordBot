module.exports = {
  name: "ping",
  type:'prefix',
  description: "Ping for a pong ;)",
  sample: "sample command : -ping",
  permissions: null,
  execute(message, args) {
    message.lineReply("pong !");
  },
};
