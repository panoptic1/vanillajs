console.log("Let's do this!");


//create a button variable to be invoked when the timer reaches 0
var button = document.createElement('button')
button.id = `restart`
button.innerText = "Restore the timer?"

//Create a State-based component(?) using the constructor pattern
/**
 * State-Based UI Component
 * @param {String} selector The selector of the target element
 * @param {Object} options Component options
 */
var Goo = function( selector, options ) {
    this.elem = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template
}

//Render a new UI
Goo.prototype.render = function () {
    //console.log(Goo.prototype);
    this.elem.innerHTML = this.template(this.data)
};

//Instantiate a new version of the component using the 'new' operator and passing in options
var timer = new Goo (`#app`, {
    data : {
        time : 5
    },
    template : function (props) {
        var html = `<h1> You have ${props.time} seconds until the button of eternal return reveals itself.</h1>`;
        return html;
    }
});

timer.render();

var doSomething = function () {
    console.log(`Surrender!`);
    timer.render();
    var update = window.setInterval( function () {

        //log the value of 'time' to the console
        //console.log(timer.data.time);
        
        //decrement 'time' each time that the interval fires
        timer.data.time--;
        timer.render();
    
        //clear the interval if the timer reaches 0 and render the button of eternal return
        if (timer.data.time === 0) {
            window.clearInterval(update);
            timer.data.time = 60;
            timer.elem.appendChild(button);
            button.addEventListener(`click`, doSomething);
        }
    
    }, 1000);
}

var update = window.setInterval( function () {

    //log the value of 'time' to the console
    //console.log(timer.data.time);
    
    //decrement 'time' each time that the interval fires
    timer.data.time--;
    timer.render();

    //clear the interval if the timer reaches 0 and render the button of eternal return
    if (timer.data.time === 0) {
        window.clearInterval(update);
        timer.data.time = 60;
        timer.elem.appendChild(button);
        button.addEventListener(`click`, doSomething);
    }

}, 1000);




