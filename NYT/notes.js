console.log("Let's go!");

//API KEY: v4gKfXgZRwrNFYXJmdQ6WUrs9ZF3ABzc
//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=v4gKfXgZRwrNFYXJmdQ6WUrs9ZF3ABzc

//GETTING AND SETTING HTML

var elem = document.querySelector("div")

//get html content
var html = elem.innerHTML;
console.log(html);

//set that content dynamically, son!
elem.innerHTML = `You can dynamically insert content in this fashion, even including elements like <a href="#">this link</a>. `

//append new text (instead of just replacing what was already there) by using the += operator
elem.innerHTML += "This text is appended."

//While we're at it, why not prepend something?
elem.innerHTML = "This text is prepended. " + elem.innerHTML;

//Or why not inject another element into the previous element entirely? 
elem.innerHTML += `<p>In the works of Eco, a predominant concept is the distinction between figure
and ground. Lyotard uses the term ‘libertarianism’ to denote the failure, and
some would say the rubicon, of neodialectic narrativity. In a sense, the
premise of the cultural paradigm of expression holds that society, somewhat
paradoxically, has objective value, but only if Sontag’s analysis of Debordist
image is invalid.</p>`

//CONVERTING ARRAYS INTO HTML
var beers = ["Mexican Honey", "George S. Hunter", "Todd the Axe Man", "Two Hearted"];
var app = document.querySelector("#app");

//set the content of the div using app.innerHTML
//the map method will allow you to create a new array from an existing one. 
app.innerHTML = beers.map(function (beer){
    return `<li>` + beer + `</li>`
}).join(''); //then use join to combine everything from the array into a single string

//alternatively:
var html = '';
beers.forEach(function (beer){
    html += `<li>` + beer + `</li>`;
});

app.innerHTML = html





