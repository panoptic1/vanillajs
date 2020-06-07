console.log("let's go!")

//  FINDING A MATCHING PARENT ELEMENT
var elem = document.querySelector('#d3');

// Get closest parent with a [data-sandwich] attribute
var sandwich = elem.closest('[data-sandwich]');
console.log(sandwich);

// Get closest parent with a .wrapper class
var wrapper = elem.closest('.wrapper');
console.log(wrapper);

// Get the first element with the [data-snack] attribute
var snack = elem.closest('[data-snack]');
console.log(snack);

window.addEventListener('click', openDoor());