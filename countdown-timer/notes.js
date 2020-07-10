//===========WTF IS STATE?===================
//STATE is data.
//There is a time-bound aspect to it:
//It is the data at a particular moment in time.
//It is the STATE of your data at the present moment.

//=============STATE-BASED UI================
//With a state-based approach, you save all of you data to a JS object.
//Then, you use JS to build the DOM with the current state of the data. 
//There are three necessary ingredients to cook in this fashion:

//  1. A data object
// var data = {
//     authors : [`Russell Banks`, `Don DeLillo`, `Ta-Nehisi Coates`]
// };

//  2. A template for how the UI should look
// var template = function ( props ) {
//     var html =
//     `<ul>` + 
//         props.authors.map( function (author) {
//             return `<li>` + author + `</li>`
//     }).join('') +
//     `</ul>`;
//     return html;
// };

//  3. A way to render the template into the DOM
// var app = document.querySelector(`#app`);
// app.innerHTML = template(data);

//=============STATE-BASED COMPONENTS============

/**
 * State-Based UI Component
 * @param {String} selector The selector of the target element
 * @param {Object} options Component options
 */

 //Use the contstructor pattern for this 
 var Rue = function ( selector, options ) {
    this.elem = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template;
 };

 //Render a new UI
 Rue.prototype.render = function () {
    this.elem.innerHTML = this.template(this.data);
 }

 //The list of literary titans
 var app = new Rue (`#app`, {

     data: {
        authors: [`George Orwell`, `Russell Banks`, `Don DeLillo`, `George Saunders`]
     },

     template: function (props) {
        var html = 
            `<h1>Best Darn Authors</h1>
            <ul>` +
                props.authors.map( function (author) {
                    return `<li>` + author + `</li>`
                }).join('') +
            `</ul>`;
        //console.log(html);
        return html;
     }
 });
console.log(app);
 //Render the list
 app.render();

 //Add another author to the titans array
 app.data.authors.push(`WEB DuBois`);
 //console.log(app.data.authors);


 //+++++++++++++++++++++   window.setInterval()   +++++++++++++++++++++++++++++++
 //Set a timeout to rerender the DOM after five seconds. 
 var update = window.setInterval( function () {
     app.render();
 }, 5000);

 var count = 10
 var countDown = window.setInterval( function () {

    //log the count value to the console
    //console.log(count);

    //Decrease count by 1
    count--;

    //If the value of count reaches zero, clear the interval
    if (count === 0) {
        window.clearInterval(countDown);
        //console.log(`I am so done counting down.`)
    }
 }, 1000 );

 //======================== +++ parseInt() +++ ===============================
 //Used to turn a string into a number
 //The first argument is the string that you want to parse into a number, the second
 var numeral = parseInt(`462`, 10); //returns 462

 var alphaNumeral = parseInt(`46 and 2`, 10); //returns 46 >>> I guess after the first integer gets interrupted then it stops.

 var decimal = parseInt(`462.12`, 10); //returns 462

 //======================== +++ toString() +++ ====================================
//Used to turn a number (or booleans) into a string.

var pi = 3.14
var piString = pi.toString();
console.log(piString);
var tru = true.toString();
console.log(tru);

//========================= +++ String.padStart() +++ ==============================
//Adds leading characters to a string in the event that a minimum length has not been met for formatting purposes.
//It accepts two arguments:
//  1st: the length that the string should be
//  2nd: the characters that should be added to the beginning of the string to 'spackle' it if it doesn't meet the first parameter

//returns '03'
var hour3 = `3`;
var padded3 = hour3.padStart(2, `0`);
console.log(padded3); //returns '03'

var hour12 = `12`;
var padded12 = hour12.padStart(12, `0`);
console.log(padded3); //returns '12'




