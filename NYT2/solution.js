//target the app div
var app = document.querySelector("#app");

//store your api key for easier access
var key = `v4gKfXgZRwrNFYXJmdQ6WUrs9ZF3ABzc`;

//set the sections and the number of articles that you want to variables in order to make them easily alterable
var sections = ['technology', 'science', 'magazine'];
var numberOfArticles = 3;

var render = function (articles, section) {
    //Create a new array of markup strings with Array.map(), then
    //Combine them into one string with Array.join(), then
    //insert them into the DOM with innerHTML
    app.innerHTML += `<h2>` + section + `</h2>` + articles.map( function (article) {
        var html = 
        `<article>` +
            `<h3><a href="` + article.url + `"> ` + article.title + `</a>` +
            `<p>` + article.byline + `</p>` +
            `<p>` + article.abstract + `</p>` +
        `</article>`;
        
        return html;
    }).join('');
}

var getFirstFew = function (articles) {
    return articles.slice(0, numberOfArticles);
}

var getArticles = function (section) {
    fetch(`https://api.nytimes.com/svc/topstories/v2/1` + section + `.json?api-key=` + key)
    .then( function (response){
        if (response.ok) {
            return response.json();
        } else { return Promise.reject(response)}
    }).then (function (data){
        //Get the first few articles
        var firstFew = getFirstFew(data.results);

        //render them into the DOM
        

    })
};

getArticles();
