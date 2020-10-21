let axios = require("axios");
let moment = require("moment");

let backgroundURL = "https://api.unsplash.com/photos/AYFgiNAjwd4?client_id=AicRuPticACIsZoI7dAnlmWXIw7Vxn7dyKeIzKsAHbA"
let weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=da5c075ec9254430fe750c6299c322bf"
let quoteURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"


axios.get(backgroundURL)
.then((result) => {
    console.log(result.data.urls.regular)
    //decided to use just one photo instead of random because some of the photos does not look too good
    
    // let random = Math.floor(Math.random()* result.data.length);
    // let html = `<img class="vh-100 vw-100" src="${result.data[random].urls.full}">`;
    // document.querySelector(".bg").innerHTML = html;
    document.querySelector(".bg").style.content = `url("${result.data.urls.raw}")`;

})
.catch((error) => {
    console.log(error);
})

axios.get(weatherURL)
    .then((result) => {
        console.log(result.data.name);
        let html = `${Math.floor(result.data.main.temp)}°C </br> ${result.data.name}`
        document.querySelector(".weather").innerHTML = html;
    })
    .catch((error) => {
        console.log(error);
    })

axios.get(quoteURL)
    .then((result) => {
        console.log(result.data);
        let html = `<div class="font-italic">${result.data.quoteText}</div> ~ ${result.data.quoteAuthor}`
        document.querySelector(".quotes").innerHTML = html;
    })
    .catch((error) => {
        console.log(error);
    })



setInterval(function () {
    document.querySelector(".time").innerHTML = `${moment().format("h:mm:ss a")} </br> <h1>Good day, Saif</h1>`;
}, 1000);


