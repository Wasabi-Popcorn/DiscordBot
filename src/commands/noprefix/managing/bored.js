const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  name: "bored",
  type: "managing",
  description: "Bored? here are some stuffs to quench the boredom",
  sample: "Iam bored bro",
  permissions: null,

  execute : async (msg) => {
    const quote = await getReply().catch(e=>console.log('error : ' + e));
    return msg.lineReply(quote);
  }
}

async function getReply() {
  const $ = await axios.get('https://triadmomsonmain.com/my-blog/99-ways-to-reply-to-im-bored/')
            .then(res => {
              return cheerio.load(res.data);
            })
  
  if(!$) return null;
  
  const quotes = $('div.entry-content ol li');

  var data=[];
  quotes.map((i, e)=>{
    data.push($(e).text());
  });
  return data [~~(Math.random() * data.length)];
}