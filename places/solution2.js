console.log("Let's go!")

//Get place data from the API and update the app state

//add a favesID variable with the key you'll be using for your favorites
var favesID = `exploreFaves`;

/**
 * Save favorite places to localStorage
 * @param  {Object} faves Favorite places
 */
var saveFaves = function (faves) {
	localStorage.setItem(favesID, JSON.stringify(faves));
};

/**
 * Handle render events
 * @param  {Event} event The event object
 */
var renderHandler = function (event) {

	// Save favorites to localStorage on render
	saveFaves(app.data.faves);

};

/**
 * Get favorite places from localStorage
 * @return {Object} Favorite places
 */
var getFaves = function () {
	var faves = localStorage.getItem(favesID);
	var favesObj = faves ? JSON.parse(faves) : {};
	return favesObj;
};

//Create a function that fetches data from the Places API
var getPlaces = function() {
    fetch('https://vanillajsacademy.com/api/places.json').then( function (response){
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data){
        
        //Add another property to app.data. called 'faves'. Set it as an empty object (68)
        //From the notes: This is an object ({}) that will use the place.id as the property key, 
        //and has a value of true when the place is “faved”, and false when it’s not.??????????
        // For example, logging app.data.faves, I might get something like this. 
        // Here, the zoo is a “fave” but Waterfire is not.

        // var faves = {
	    // 'waterfire': false,
	    // 'roger-williams-park-zoo': true
        // };

        //Then, in my getPlaces() function, I set app.data.faves to whatever getFaves() returns instead of an empty object.
        app.data.faves= getFaves();

        //Once the API returns data, set it to app.data under the 'places' property(66)
        app.data.places = data;
        
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
                        //Add the button here:
                        `<p><button data-fave="` + place.id + `" aria-label="Save ` + place.place + `"
                        aria-pressed="` + props.faves[place.id] + `">♥</button></p>` + //now you can manipulate aria-pressed
                `</div>` +
            `</div>`;
        return html;
    //use .join() to convert each item into an html string
    }).join(``);
};

/**
 * Handle click events
 * @param  {Event} event The event object
 */
var clickHandler = function (event) {

	// Only run on fave buttons
    var place = event.target.getAttribute('data-fave');
	if (!place) return;

	// If place is already saved, remove it
	// Otherwise, save it
	app.data.faves[place] = app.data.faves[place] ? false : true;

};

//make the call
getPlaces();

//event listeners 
document.addEventListener('click', clickHandler);

/**
 * "Rather than trying to manually run it whenever I update the app.data.faves object, 
 * I decided to hook into a special event that Reef emits whenever it renders a new UI: render."
 */
document.addEventListener('render', renderHandler);




