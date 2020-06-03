console.log("Let's go!");

var routines = ["running", "yoga", "writing", "coding", "meditation", "reading"]

//How would we shuffle this array?
//JS, unlike some other languages/libraries, does not have a native shuffle function.
//The FISHER-YATES shuffle algorithm is a widely used workaround for this problem.

//Here's a helper function that uses the Fisher-Yates shuffle:

// /**
//  * Randomly shuffle an array
//  * https://stackoverflow.com/a/2450976/1293256
//  * @param  {Array} array The array to shuffle
//  * @return {String}      The first item in the shuffled array
//  */

var shuffle = function (array) {
    
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    //While there remains an element to shuffle...
    while (0 !== currentIndex) {
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};

console.log(routines);

var shuffledRoutines = shuffle(routines.slice());

console.log(shuffledRoutines);

