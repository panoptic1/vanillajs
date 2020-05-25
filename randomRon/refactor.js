//Create variables to target the blockquote element and the button
const btn = document.querySelector("#get-quote");
const quote = document.querySelector("#quote");

//Get a fresh quote and render it into the DOM
var getQuote = function () {
    //get a Ron Swanson quote
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then( function (response){
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        quote.textContent = data[0];
    }).catch(function (error){
        quote.textContent = '[Something went wrong. Sorry!] I have a joke for you...The government in this town is excellent and uses your tax dollars efficiently.'
    });
};

btn.addEventListener('click', function(){
    getQuote();
})