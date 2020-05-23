//VARIABLES
var text = document.querySelector("#text");
var count = document.querySelector("#count");

//create an event listener for the textarea
text.addEventListener('input', function () {

    //get the word count
    var words = text.value.split(/[\n\r\s]+/g).filter(function (word) { //see: RegEx patterns as they pertain to .split
        return word.length > 0
    });

    //display the word and character count
    count.innerHTML = `You\'ve written <strong>` + words.length + `words</strong> and <strong>` + text.value + 
    `character</strong>.`

})