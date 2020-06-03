//target the app div
var app = document.querySelector("#app");

//store your api key for easier access
var key = `v4gKfXgZRwrNFYXJmdQ6WUrs9ZF3ABzc`;

//set the sections and the number of articles that you want to variables in order to make them easily alterable
var sections = ['technology', 'science', 'magazine'];
var numberOfArticles = 3;

var sanitizeHTML = function (str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

var render = function (articles, section) {
    //Create a new array of markup strings with Array.map(), then
    //Combine them into one string with Array.join(), then
    //insert them into the DOM with innerHTML
    app.innerHTML += `<h2>` + section + `</h2>` + articles.map( function (article) {
        var html = 
        `<article>` +
            `<h3><a href="` + sanitizeHTML(article.url) + `"> ` + sanitizeHTML(article.title) + `</a>` +
            `<p>` + sanitizeHTML(article.byline) + `</p>` +
            `<p>` + sanitizeHTML(article.abstract) + `</p>` +
        `</article>`;
        
        return html;
    }).join('');
}
 

var getFirstFew = function (articles) {
    return articles.slice(0, numberOfArticles);
}

var getArticles = function (section) {
    fetch(`https://api.nytimes.com/svc/topstories/v2/` + section + `.json?api-key=` + key)
    .then( function (response){
        if (response.ok) {
            return response.json();
        } else { return Promise.reject(response)}
    }).then (function (data){
        //Get the first few articles
        var firstFew = getFirstFew(data.results);

        //render them into the DOM
        render(firstFew, section);

    })
};

sections.forEach( function (section) {
    getArticles(section);
})

//This entire solution was based on the one provided by @cferdinandi