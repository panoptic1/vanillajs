//use fetch to have a look at the data that comes back on the Ron Swanson API
fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function (response){
    //the API call was successful!
    return response.json();
}).then(function (data){
    //This is the JSON from the response
    console.log("success!", data)
}).catch(function (err){
    console.warn("doh!", err)
});

//Write a variable for the 'More Ron' button
const button = document.querySelector("button")

//Create an event listener for a click event on the More Ron button
button.addEventListener('click', function(event){
    
    //Write a promise that pings the Ron Swanson API and renders the data in the blockquote element
    const getQuote = new Promise ( function (resolve, reject){
        resolve("You wrote a promise!")
    })

    getQuote.then( function (quote){
        console.log(quote);
    })
})

