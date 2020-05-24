//use fetch to have a look at the data object that comes back when you use fetch on the Ron Swanson API
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

//Create an event listener for a click event on the More Ron button

//Write a promise that pings the Ron Swanson API and renders the data in the blockquote element