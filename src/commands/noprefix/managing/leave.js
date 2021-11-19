module.exports = {
  name: "leave",
  type: "managing",
  description: "reply to YAGPDB for leaving message",
  sample: "Leave me alone",
  permissions: null,

  execute(msg) {

    if (msg.guild.id != "863391096461459457") return;
    const check = msg.toString().includes('670228251821735966') && msg.toString().toLowerCase().includes("wasa");
    if (check) {
      msg.lineReply(`No ***YOU***  shut up !!! , <@670228251821735966> is right`);
    }
  },
};
