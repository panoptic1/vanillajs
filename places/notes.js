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

//================================== +++ DOM DIFFING +++ =======================================
//What is it?
//In a nutshell, it's a means of manually manipulating the DOM in such a way that you target specific elements
//for changes, rather than repainting the entire UI every time that you make a change to your data. 
//One of the obvious advantages to this is that your browser doesn't do any unecessary rerendering.

//'Diffing' refers to usting state-based UIs in order to make a comparison between the existing DOM and the 
//template that you have created. 

//          How does diffing work?
// It's done in one of two ways:
//1. Using the actual DOM
//2. Using the virtual DOM

//Let's take a look...

//Imagine a UI that looks like this:
/**
 * <h1>Hello, world!</h1>

<p>It is a nice day, today.</p>

<ul>
	<li class="active">Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
 */

//=====================================================================================================

 //After a state change takes place, we want it to look like this:
/**
 * <h1>Hi, friend!</h1>

<p>It is a nice day, today.</p>

<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li class="active">Item 3</li>
	<li>Item 4</li>
</ul>
 */

//Four changes need to be made:
// 1. the 'h1' heading text needs to update
// 2. the '.active' class needs to be removed 
// 3. the '.active' class needs to be added to the third list item
// 4. A fourth list item with the text 'Item 4' needs to be added to the end

//How would a framework use DOM Diffing under the hood to make those changes?

// 1. Using the actual DOM

/**
 * With "real" DOM diffing, a framework or library converts your template string into actual HTML elements,
 * and then compares each one to its corresponding element in the UI.
 * If it notices that anything is different, it determines what needs to change and makes the updates.
 * Here's a rough look under the hood:
 * 
 * 
 * // Check that the element exists
// If not, add the new element to the UI
if (!currentElem) {
	parentElem.appendChild(newElem);
}

// Check the text
if (newElem.textContent !== currentElem.textContent) {
	currentElem.textContent = newElem.textContent;
}

// Check for class changes
if (newElem.className !== currentElem.className) {
	currentElem.className = newElem.className;
}

This is more or less how the process would look if you were to manually update the UI withou the help of a framework.
 */

// 2. Using the Virtual DOM

/**
 * For UIs that have HUGE datasets and lots of nested elements (think facebook), diffing the actual DOM can be inefficient
 * 
 * Big frameworks like React and Vue address this by using what is called the VIRTUAL DOM
 *
 * The VIRTUAL DOM is a JS object representation of what the UI looks like.
 * Whenever the state changes, the framework creates a new version of the object, compares it to the current version,
 * and puts together a list of changes to make. For the existing UI in the example above, the virtual DOM might look somethings like this:
 * 
 * var map = [
	{
		type: 'h1',
		text: 'Hello, world!',
		props: [],
		children: null
	},
	{
		type: 'p',
		text: 'It is a nice day, today',
		props: [],
		children: null
	},
	{
		type: 'ul',
		text: null,
		props: [],
		children: [
			{
				type: 'li',
				text: 'Item 1',
				props: [{
					prop: 'className',
					value: 'active'
				}],
				children: null
			},
			// Etc...
		]
	}
];
 */


 /**Which method is better?
  * From Chris:
  * "If you’re not building apps of that scale and complexity, 
  * I do not personally believe the performance benefits of the virual DOM 
  * outweigh the performance hit you take from the much larger file size and abstractions.""
  */

 // ================================= +++ aria-label +++ ================================================

 /**
  * The [aria-label] attribute let’s you add what’s called an accessible label. This is text that’s read aloud by screen readers, 
  * but is not visually exposed to users.
  * 
  * The [aria-label] text is read instead of any content inside the element, including otherwise accessible text.

In addition to icons, it can be useful when the context of a link or button might be apparent to sighted users, but confusing for visually impaired users.

For example, a sighted user might be able to infer that a “read more” link is for the article before it, while a screen reader user tabbing through links might not.

The link below would be announced as “Read more about pirates,” instead of “Read more…”.

<a href="link-to-article.html" aria-label="Read more about pirates">
	Read more...
</a>
  */

//======================================== +++ button state ++ ==========================================================

/**
 * n apps, it’s common to have buttons that have an on/off or pressed/not pressed state.

For example, take the Twitter “like” button (which, for :waves hands wildly: reasons is not actually a button, but for this lesson, we’ll pretend it is).

<button class="fave" aria-label="Favorite">❤</button>
Maybe you have a few simple styles associated with the .fave class, like this.

.fave {
	background: transparent;
	border: 0;
	font-size: 2em;
}
When someone clicks the button, you want to show that it’s “active.”
 */

//WRONG WAYS TO DO THIS:
/**I often see “active state” classes, like .is-active, added to elements to modify their appearance.

<button class="fave is-active" aria-label="Favorite">❤</button>

.fave.is-active {
	color: red;
}

While this changes the visual appearance of the button, it does not convey any information about the new state to screen reader users.

You might think you can solve this by changing the [aria-label] to say Favorited or something similar.

<button class="fave is-active" aria-label="Favorited">❤</button>

Unfortunately, changes to the [aria-label] text are not announced by most screen reader/browser combinations.
 * 
 */

//CORRECT WAY TO DO THIS:
/**
 * To solve this issue, you can use the [aria-pressed] attribute.

This attribute lets screen readers know that a button has “state.” When it has a value of false, the button is not pressed. When it has a value of true, it is.

<!-- This button is NOT active -->
<button class="fave" aria-label="Favorite" aria-pressed="false">❤</button>

<!-- This button IS -->
<button class="fave" aria-label="Favorite" aria-pressed="true">❤</button>
You can change the attribute value using the setAttribute() method.

Don’t remove the attribute if the button is inactive. Toggle it from true to false

// The button is active
btn.setAttribute('aria-pressed', true);

// The button is inactive
btn.setAttribute('aria-pressed', false);
You can even hook into it for styling purposes.

.fave[aria-pressed="true"] {
	color: red;
}
With this approach, you should not change the [aria-label] if you’ve used one.

The [aria-pressed] attribute conveys the important information about the button state.
 */
