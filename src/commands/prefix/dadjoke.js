const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  name: "dadjoke",
  type: "prefix",
  description: "get a dad joke using `-dj` or `dadjoke`",
  sample: "sample command : `-dj` or `-dadjoke`",
  permissions: null,

  execute: async (msg) => {
    const joke = await getDadJoke().catch(e=>console.log('error : ' + e));
    return msg.lineReply(joke);
  },
};

async function getDadJoke() {
  const $ = await axios.get('https://www.menshealth.com/trending-news/a34437277/best-dad-jokes/')
            .then(res => {
              return cheerio.load(res.data);
            })
  
  if(!$) return null;
  
  const quotes = $('ul.body-ul li');

  var data=[];
  quotes.map((i, e)=>{
    data.push($(e).text());
  });
  return data [~~(Math.random() * data.length)];
}