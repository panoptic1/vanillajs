//
// Variables
//

var duration = 120;
var timer;


//
// Methods
//

/**
* State-based UI Component
* @param {String} selector The selector for the target element
* @param {Object} options  Component options
*/
var Rue = function (selector, options) {
	this.elem = document.querySelector(selector);
	this.data = options.data;
	this.template = options.template;
};

/**
* Render a new UI
*/
Rue.prototype.render = function () {
	this.elem.innerHTML = this.template(this.data);
};

/**
* Stop the timer
*/
var stopTimer = function () {
	if (app.data.time > 0) return;
	clearInterval(timer);
};

/**
* Start the timer
*/
var startTimer = function (event) {

    //check to see if the correct button was pushed
    if (!event.target === document.querySelector('data-start-pause')) return

	// Reset app data
	app.data.time = duration;

	// Render the initial UI
	app.render();

	// Start the countdown timer
	timer = setInterval(countdown, 1000);

};

/**
* Countdown the timer by 1
*/
var countdown = function () {

	// Reduce the time by 1 second
	app.data.time--;

	// Check if the timer should be stopped
	stopTimer();

	// Update the UI
	app.render();

};

/**
* Handle click events
* @param  {Event} event The Event object
*/
var clickHandler = function (event) {

	// Only run if the restart button was clicked
	if (!event.target.hasAttribute('data-restart-timer')) return;

	// Start the timer
	startTimer();

};

var getTimerHTML = function ( props ) {
    
    var html;
    
    //declare variables to be used in the html
    var minutes = parseInt(props.time / 60, 10).toString();
    var seconds = (props.time % 60).toString().padStart(2, `0`);

    html = `
    <p>${minutes}:${seconds}</p>
    <button data-start-pause>Start</button><button data-restart-timer>Restart</button>
    `;

    //console.log(minutes);
    //console.log(seconds);

    //return the formatted time
    return html; 

};

/**
* Create the timer component
* @param  {Object} props The component options
 */
var app = new Rue('#app', {
	data: {
	time: duration
	},
	template: function (props) {

    // If the timer is done, show a button to restart it
    if (props.time < 1) {
		return '⏰ <p><button data-restart-timer>Restart Timer</button></p>';
		}

		// Otherwise, show the current time
		return getTimerHTML(props);

        }
});

//
// Inits & Events
//


app.render();
document.addEventListener('click', clickHandler);
document.addEventListener('click', startTimer);
