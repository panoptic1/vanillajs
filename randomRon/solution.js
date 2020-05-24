//Write variables for the 'More Ron' button and the blockquote element
const button = document.querySelector("button")
const block = document.querySelector("blockquote")

//Create an event listener for a click event on the More Ron button
button.addEventListener('click', function(event){
    
    //Write a promise that pings the Ron Swanson API and renders the data in the blockquote element
    const getQuote = new Promise ( function (resolve, reject){
        resolve(
            fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function (response){
            return response.json();
            }).then(function (data){

            //convert data into an array and set the value of block to data
            Array.prototype.slice.call(data);
            block.innerText = data

            }).catch(function (err){
            console.warn("doh!", err);
        })
        );
    });
    
})

