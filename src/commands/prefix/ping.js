module.exports = {
  name: "ping",
  type:'prefix',
  description: "ping for a pong ;)",
  sample: "sample command : -ping",
  permissions: null,
  execute(message, args) {
    message.lineReply("pong !");
  },
};
