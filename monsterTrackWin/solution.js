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

//The score
var score = 0

//The wins
var wins = 0

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

//Put the entire initial markup rendering into a function so that we can reset the game later
function startGame(){
   // Create the HTML and inject it into the DOM
    app.innerHTML = '<div class="row">' + monsters.map( function ( monster, index ) { //parameters for map are slightly different
        var html =
            '<div class="grid" aria-live="polite">' +
                //add a button so that the pictures are focusable. Not sure about using the index? How does this target pic?
                '<button data-monster-id="' + index +'">' +
                    //add some alt text to give screen readers something to read
                    '<img alt="Click the door to find out what is behind it!" src="door.svg">' +
                '</button>' +
            '</div>';
    score = 0;
    return html;

    }).join('') + '</div>' +
                    '<div id="scoreboard" class="row">' +
                        `<span id=score>Score: ${score} </span>` + 
                        `<span id=wins>Wins: ${wins} </span>` +
                        `<span id=restart></span>`
                    '</div>'; 
}

startGame();

// Create the HTML and inject it into the DOM

var clickHandler = function (event) {
    
    //check if clicked element or its parent has a [data-monster-id] attribute
    var monster = event.target.closest('[data-monster-id]');
    
    //escape the function if it's not a monster/sock image
    if (!monster) return;
    
    //Get the monster's index in the array
    var id = monster.getAttribute('data-monster-id');
    
    //Update the HTML for the button's parent element
    //This will REPLACE the button, so the content cannot be clicked again
    //Use the id to get the monster from our shuffled array
    monster.parentNode.innerHTML = '<img alt="' + monsters[id] + '" src="' + monsters[id] + '.svg">'

    //run the tallyScore function on every click to either increment the score or end the game. 
    tallyScore(monsters[id]);
}

function tallyScore(clickedMonster){
    //access the scoreboard
    var scoreboard = document.querySelector('#score');
    var wins = document.querySelector('#wins');
    var restart = document.querySelector('#restart');
    
    if (clickedMonster !== `sock`){
        score++;
        scoreboard.textContent = "Score: " + score;
    } 
    else {
        restart.innerHTML = `<button id="restart">Game over! Try again?</button>`
        restart.addEventListener('click', startGame, false);
        }
}

//listen for click events
document.addEventListener('click', clickHandler, false);
