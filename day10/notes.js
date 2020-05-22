console.log("let's go!");

var app = document.querySelector('#app');

setTimeout( function (){
    app.textContent = "Whoa dude! How'd I get here?"
}, 5000)