//GET, SET, REMOVE, & CHECK ATTRIBUTES FROM YOUR ELEMENTS
//The  '.matches()' method...
//what it does:
//returns a boolean confirming whether or not an element that you pass into it exists in the DOM

//VARIABLES
const elemRed = document.querySelector(`#red`);
const elemSon = document.querySelector(`[data-child="damon"]`);
const margarita = document.querySelector('#margarita');
//get an attribute from the paragraph
const cordial = margarita.getAttribute('data-cordial');

//Use the .check() method to check for data attributes.
//Check for your dog:
if (elemRed.matches(`[data-dog="russell"`)){
    //console.log("What a handsome dog!");
} else {
    //console.log("Boohoo! Where's my dog?!");
}
//Check for musicality in your son...
if (elemSon.matches('#musical')) {
    //console.log("What a prodigy!");
} else {
    //console.log("Maybe he'll be good at sports.");
}

//create an event listener that finds the red one among the divs!

// window.addEventListener('click', function(event){
//     if(event.target.matches(`.red`)){ //seems to only work with the 'class' selector...
//         console.log("Here's the red one!")
//     } else {
//         console.log("Definitely not red.")
//     }
// });

//set a new value for the cordial in the margarita
margarita.setAttribute('data-cordial', 'grandMarnier');
console.log(margarita);

//console.log(margarita);
//console.log(cordial);// it would seem that while the 'data-cordial' value was changed by '.setAttibute',
//the value of the 'cordial' variable remains in its original state when logged 

//remove the 'data-sweetener' selector for the margarita variable
//margarita.removeAttribute('data-sweetener');

//check to see if there is sweetener in the margarita or not
if (!margarita.hasAttribute('data-sweetener')) {
    console.log("It's a sweet one!")
} else {
    console.log("It's a skinny one!")
}

