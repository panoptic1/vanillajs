//Write variables for the 'More Ron' button and the blockquote element
const button = document.querySelector("button")



//Create an event listener for a click event on the More Ron button
button.addEventListener('click', function(event){
    
    //Write a promise that pings the Ron Swanson API and renders the data in the blockquote element
    const getQuote = new Promise ( function (resolve, reject){
        resolve(
            fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function (response){
            return response.json();
            }).then(function (data){
            //console.log("success!", data);

            //convert the data into an array
            Array.prototype.slice.call(data);
            console.log("data arrayified: " +  data)

            }).catch(function (err){
            console.warn("doh!", err);
        })
        );
    });
    
})

