//(based on @cferdinandi's review solution)
//Create variables to target the blockquote element and the button
const btn = document.querySelector("#get-quote");
const quote = document.querySelector("#quote");

//Create an empty array called usedQuotes to capture the quotes that have already been used.
let usedQuotes = [];

//Get a novel quote and render it into the DOM
var getNovelQuote = function (){
    fetch ('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then (function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then( function (data) {
        //if the quote is already in the quotes array, it's been used within the last fifty clicks
        //call getQuote() recursively
        //then return to quit the function
        if (usedQuotes.indexOf(data[0]) > -1) {
            getNovelQuote();
            return
        }

        //Otherwise, show and push the quote
        quote.textContent = data[0];
        usedQuotes.push(data[0]);

        if (usedQuotes.length > 50) {
            usedQuotes = [];
        }
        console.table(usedQuotes);
    }).catch( function (error){
        quote.textContent = "Something went wrong here. I have a joke for you: the government in this town is excellent and uses your tax dollars efficiently.";
    });
};

getNovelQuote();

btn.addEventListener('click', getNovelQuote, false);