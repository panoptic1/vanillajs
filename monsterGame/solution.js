/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

// The monsters and socks
var monsters = [
    'monster1',
    'monster2',
    'monster3',
    'monster4',
    'monster5',
    'monster6',
    'monster7',
    'monster8',
    'monster9',
    'monster10',
    'monster11',
    'sock'
];

//The door
var door = `door`

// Get the #app element
var app = document.querySelector('#app');

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};

// Shuffle the monsters array
shuffle(monsters);

// Create the HTML and inject it into the DOM
app.innerHTML = '<div class="row">' + monsters.map(function (monster) {
    var html =
        '<div class="grid">' +
        //add a data- attribute to target the pictures of each monster
        '<img aria-live="polite" alt="' + door + '" src="' + door + '.svg" data-monster="' + monster + '">' +
        '</div>';
    console.log(html);
    return html;

}).join('') + '</div>';

//Write a function that 'opens the door' and reveals the image behind it
function openDoor(e){
    console.log(e);
    var image = this.closest(`[data-monster]`)
    // console.log(event.target);
    //console.log(image);
    //If the if the data-monster value = sock, then reveal the sock and end the game
    var selectedImage = image.getAttribute(`data-monster`)

    if (selectedImage === "sock"){
        image.src = selectedImage + ".svg"
    } else {
        image.src = selectedImage + ".svg"
    }
    //Else, show the monster
    
}

var elem = document.querySelectorAll(`img`);
//Create an event listener with elem.closest that listens for user clicks on the img elements.

for (var i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', openDoor)
}

// elem.forEach(item => {
//     item.addEventListener('click', openDoor)
// })
//Write a function that checks whether or not 