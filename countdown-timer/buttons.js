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
	
	clearInterval(timer);
};

/**
* Start the timer
* @param {Event} The Event object
*/
var startTimer = function (event) {

    if (!event.target.hasAttribute(`data-start-timer`)) return;

    if (app.data.time < 1) {
        restartTimer();
        return;
    }

    //unpause the timer
    app.data.paused = false;

    //Render the initial UI
    app.render();

    //Stop any already-running timers
    stopTimer();

	// Start the countdown timer
	timer = setInterval(countdown, 1000);

};

/**
* Pause the timer
* @param {Event} The Event object
*/
var pauseTimer = function (event) {

    if (!event.target.hasAttribute(`data-pause-timer`)) return;

    //stop the countdown timer
    stopTimer();

    //set the timer to paused.true
    app.data.paused = true;

    app.render();

};

/**
* Restart the timer
* @param {Event} The Event object
*/
var restartTimer = function (event) {

    if (!event.target.hasAttribute(`data-restart-timer`)) return;

    //stop any current running timers.
    stopTimer();

	// Reset app data
    app.data.time = duration;
    app.data.paused = false;

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
    
    //If timer should be stopped, stop it
    if (app.data.time < 1) {
        stopTimer();
    }

    app.render();

};

/**
* Handle click events
* @param  {Event} event The Event object
*/
var clickHandler = function (event) {
	
    startTimer(event);
    pauseTimer(event);
    restartTimer(event);

};

var getTimerHTML = function ( props ) {
    var html;

    //get the minutes and seconds
    var minutes = parseInt(props.time / 60, 10);
    var seconds = props.time % 60; 

    //return the formatted time
    var html = minutes.toString() + `:` + seconds.toString().padStart(2, `0`) +
    `<p>` + 
        //this is an if statement. Think of the '?' as being the if, only it comes after the condition
        (props.paused ? `<button data-start-timer>Start</button>`
                      : `<button data-pause-timer>Pause</button>`) +
                        `<button data-restart-timer>Restart</button>` +
    `</p>`

    return html;

};

/**
* Create the timer component
* @param  {Object} props The component options
 */
var app = new Rue('#app', {
	data: {
        
        time: duration,
        //add a property of paused to handle when the button gets paused. Set it to a boolean. 
        paused: true
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

//render the initial UI
app.render();

document.addEventListener('click', clickHandler);