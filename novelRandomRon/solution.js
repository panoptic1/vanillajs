//Create variables to target the blockquote element and the button
const btn = document.querySelector("#get-quote");
const quote = document.querySelector("#quote");

//Create an empty array called usedQuotes to capture the quotes that have already been used.
let usedQuotes = [];


//Get a fresh quote and render it into the DOM
var getNovelQuote = function () {
    //get a Ron Swanson quote
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then( function (response){
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        //check to see if the data that comes back exists in the array
        if (usedQuotes.includes(data[0])){
            //if it does already exist in the array, run the function again.
            console.log("Shoot, that's already here!");
            quote.textContent = "I can't seem to recall anything novel right now...I'm going to blame the scotch."
            getNovelQuote();
        } else {
            //if it doesn't already exist in the usedQuotes array, push it into the array
            usedQuotes.push(data[0]);
        }
        
        quote.textContent = data[0];
        
    }).catch(function (error){
        quote.textContent = '[Something went wrong. Sorry!] I have a joke for you...The government in this town is excellent and uses your tax dollars efficiently.'
    });
};

getNovelQuote();

btn.addEventListener('click', getNovelQuote, false);