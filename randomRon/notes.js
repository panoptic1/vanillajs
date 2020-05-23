//PROMISES

//What is a promise?
//  //A promise is an object that represents an asynchronous function

var sayHello = new Promise(function (resolve, reject){

    //In five seconds, resolve the promise
    //Pass along "Hi, universe!" to any callback methods
    setTimeout(function (){
        resolve(`Hi, universe!`);
    }, 5000);
});

//After five seconds, if the promise resolves, the following callback method will log "Hi, universe!" to the console.
sayHello.then(function (msg){
    console.log(msg); //Interesting stuff: the console message logs as a clickable link rather than a string
});

//THE FETCH API
//   //used to make AJAX requests, such as calling an API or fetching a remote resource or HTML file from a server
//  //returns a promise 'under the hood'

//the basic syntax:
fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) { //pass in a fake API for testing
    //the API call was successful!
    console.log("success!", response);
}).catch(function (err) {
    console.warn(`ruh roh!`, err)
});

//the issue with the example ^above^ is that while it successfully makes an api call and logs it,
//the data that comes back in Response.body is in a format called "ReadableStream", which is the format 
//that promises traffic in, but is not useful for reading data coming back from the API. 

//So how can we use the methods that we want to use ('then' and 'catch') and get the data back in JSON format?

//Getting JSON:

fetch('https://jsonplaceholder.typicode.com/posts').then(function (response){
    //the API call was successful!
    return response.json();
}).then(function (data){
    //This is the JSON from the response
    console.log("double success", data)
}).catch(function (err){
    console.warn("Houston, we have a problem", err)
})

