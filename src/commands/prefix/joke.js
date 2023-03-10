const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  name: "joke",
  type: "prefix",
  description: "Replies with a joke. (alias `-j`)",
  sample: "sample command : `-j` or `-joke`",
  permissions: null,

  execute: async (msg) => {
    const joke = await getJoke()
      .catch((err) => console.log("### ERROR: fetching joke ###", err));


    if (joke) {
      msg.lineReply(joke)
      console.log(`joke : ${joke.substring(0, 20)}...`);
    } else {
      console.log("no joke returned");
    }

  },
};

async function getJoke() {

  // return await fetch("https://icanhazdadjoke.com/", {
  return await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt&type=single", {
    headers: {
      Accept: "text/plain"
      // Accept: "application/json"
    }
  })
    .then(res => res.text())
  // .then(res => console.log(JSON.stringify(res)))
}


// execute: async (msg) => {
//   const joke = await getDadJoke().catch((e) => console.log("error : " + e));
//   // console.log(joke);
//   if (joke) return msg.lineReply(joke);
//   else console.log("no joke available");
//   return;
// },

// async function getDadJokeLegacy() {
//   // console.log("joke");

//   // check if there are jokes in localstorage `getRandomJokeFromLS()!=null`
//   // if so, return the joke

//   // else below
//   const $ = await axios
//     .get("https://www.menshealth.com/trending-news/a34437277/best-dad-jokes/")
//     .then((res) => {
//       // console.log(res.data);
//       return cheerio.load(res.data);
//     })
//     .catch((err) => console.log("### ERROR: fetching dadjoke ###", err));

//   if (!$) {
//     console.log("no data");
//     return null;
//   }

//   // const quotes = $("ul.body-ul li");
//   const quotes = $("li");
//   // console.log(quotes);

//   var data = [];
//   quotes.map((i, e) => {
//     data.push($(e).text());
//     // console.log($(e));
//   });

//   var arr = [];
//   quotes.forEach((e) => {
//     let valid = e.innerText && e.innerText != "" && e.innerText != null;
//     if (valid) {
//       arr.push(e.innerText);
//     }
//   });
//   // store in local storage
//   console.log(data.length);

//   // get the joke from LS
//   let randomJoke = data[~~(Math.random() * data.length)];
//   return randomJoke;
// }

// function getRandomJokeFromLS(){
// if doesnt exist or empty array, return null
// let data = localStorage.getItem('jokes')
// let randomJoke = data[~~(Math.random() * data.length)];
// return randomJoke;
// }
