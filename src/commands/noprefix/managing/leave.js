module.exports = {
  name: "leave",
  type: "managing",
  description: "reply to YAGPDB for leaving message",
  sample: "Leave me alone",
  permissions: null,

  execute(msg) {
    if (msg.guild.id != "863391096461459457") return;
    const msgs = ["<@670228251821735966>  Shut up Wasa, don’t mind him 😒",
    "<@670228251821735966>  He’s our hater, don’t pay attention to him😐"]
    const check = msgs.includes(msg.toString()) ? true : false;
    if (check) {
      msg.lineReply(`No shut up !!! , <@670228251821735966> is right`);
    } else console.log(msg.toString());
  },
};
