console.log(`Let's go!`);

//================================ +++ AJAX AND STATE-BASED UI +++ ====================================
//In the examples thus far, we've had the initial state data available to us as soon as the page loads.

//What if we want to use data from an API? (Which takes a second to call before it can be rendered?)

//   Wait for the data before rendering...

//With this approach, start by hard coding some kind of 'Loading...' message in the div where you will eventually
//render your fetched data.

/**
* Get the Proxy handler object
* @param  {Constructor} instance The current instance of the constructor
* @return {Object}               The proxy handler object
*/
var handler = function (instance) {
    return {
		get: function (obj, prop) {
			if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
				return new Proxy(obj[prop], handler(instance));
			}
			return obj[prop];
		},
		set: function (obj, prop, value) {
			obj[prop] = value;
			instance.render();
			return true;
		},
		deleteProperty: function (obj, prop) {
			delete obj[prop];
			instance.render();
			return true;

		}
	};
};
/**
 * State-based UI Component
 * @param {String} selector The selector for the target element
 * @param {Object} options  Component options
 */
var Rue = function (selector, options) {

	// Variables
	var _this = this;
	_this.elem = document.querySelector(selector);
	var _data = new Proxy(options.data, handler(this));
	_this.template = options.template;

	// Define setter and getter for data
	Object.defineProperty(this, 'data', {
		get: function () {
			return _data;
		},
		set: function (data) {
			_data = new Proxy(data, handler(_this));
			_this.render();
			return true;
		}
	});

};

/**
 * Render a new UI
 */
Rue.prototype.render = function () {
	this.elem.innerHTML = this.template(this.data);
};


//Create the component that will receive and render the data from the API...

var app = new Rue (`#app`, {
    data: {}, //the data is an empty object. We will set the value after we get the data back from the API
    template: function (props) {
        return `<ul>` + props.posts.map(function (post) {
            return `<li>` + post.title + `</li>`;
        }).join(``) + `</ul>`;
    }
});

// Fetch the data from the API
fetch('https://jsonplaceholder.typicode.com/posts').then( function (response) {
    return response.json();
}).then(function (data){
    //Reactively update the data
    //This causes the render to happen
    console.log(data);
    app.data.posts = data;
})



