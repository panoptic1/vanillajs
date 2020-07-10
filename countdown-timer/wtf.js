/**
 * State-based UI component
 * @param {String} selector The selector for the target method
 * @param {Object} options Component options
 */

var Rue = function (selector, options) {
    this.elem = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template
 };

 //Render a new UI
 Rue.prototype.render = function () {
     this.elem.innerHTML = this.template(this.data)
 }

 var duration = 5;

 //Create the actual timer component
 var app = new Rue (`#app`, {
    data: {
        time: duration
    },
    template: function (props) {
        //check here to see if the clock has reached zero FIRST
        if (props.time < 1) {
            return `<p><button data-restart-timer>Restart</button></p>`;
        }
        //Otherwise, show the current time.
        return props.time;

    }
 });

 var timer;

 /**
  * Start the timer
  */

  var startTimer = function () {
    
    app.data.time = duration;
    //Render the initial UI
    app.render();

    //Start the countdown timer
    timer = setInterval(countdown, 1000);

  };

  /**
   * Countdown the timer by one...
   */

   var countdown = function() {

    //Reduce the time by one second
    app.data.time--;
    
    //Check if the timer should be stopped
    stopTimer();

    //Update the UI
    app.render();

   };

   var clickHandler = function (event) {
    //Only if the restart button was clicked
    if (!event.target.hasAttribute(`data-restart-timer`)) return;
    console.log("Excellent click, dude.");
    duration = 5;
    startTimer();
    };

   /**
    * Stop the timer if it reaches 0
    */

    var stopTimer = function(){
        if (app.data.time > 0) return;
        clearInterval(timer);
    }
    
    startTimer();

    document.addEventListener(`click`, clickHandler);

