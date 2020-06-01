//Create a variable for the app div
var key = `v4gKfXgZRwrNFYXJmdQ6WUrs9ZF3ABzc`

//Ping the NYT API
var getNews = function () {
    //get the news from the API
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=` + key).then( function (response){
        if (response.ok) {
            console.log("You got it dude!")
            return response.json();
        } else {
            console.log("Aw snap!")
            return Promise.reject(response);
        }
    }).then(function (data) {
        const newsArray = data.results
        console.log(newsArray);
        app.innerHTML = newsArray.map(function (result){
            return `<div>
                        <h2>` + result.title + `</h2>
                        <h6>` + result.byline + `</h6>
                        <p>` + result.abstract + `</p>
                        <a href="${result.url}"> Click here to read more.</a>
                    </div>`
        }).join();
    }).catch(function (error){
        console.log("Error!");
    });
};

getNews();

 