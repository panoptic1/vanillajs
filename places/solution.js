console.log("Let's go!")

//Get place data from the API and update the app state

//Create a function that fetches data from the Places API
var getPlaces = function() {
    fetch('https://vanillajsacademy.com/api/places.json').then( function (response){
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data){
        //Once the API returns data, set it to app.data under the 'places' property
        app.data.places = data
    }).catch( function (err) {
        console.warn(err);
        app.data.places = null;
    });
};

//Create the actual app component that will be updated by the data returned from the API

var app = new Reef (`#app`, {
    data: {},
    template: function ( props ) {

        //check if there are places. if so, render them.
        if (props.places && props.places.length) {
            return getPlacesHTML(props);
        }
        //otherwise, show an error
        return getNoPlacesHTML();
    }
});

//Get the message to return if there's no data to show
//@return {string} the html

var getNoPlacesHTML = function () {
    return `<p><em>Unable to find any places right now. Sorry!</em></p>`
};

//Get the HTML to use for data injection

var getPlacesHTML = function (props) {
    
    //use array.map() to loop through props.places
    return props.places.map(function (place) {
        //declare a variable to hold your html template to use for each item on the array
        var html =
            `<div class="place">` +
                `<div>` +
                    `<img alt="" src="` + place.img + `"` +
                `</div>` +
                `<div>` +
                    `<h2>` + place.place + `</h2>` +
                    `<p>` + place.description + `</p>` +
                    `<p>
                        <em>` + place.location + `</em>
                        <br>
                        <a href="` + place.url + `">` + place.url + `</a>` + 
                        `</p>` +
                `</div>` +
            `</div>`;
        return html;
    //use .join() to convert each item into an html string
    }).join(``);
};

//make the call
getPlaces();



