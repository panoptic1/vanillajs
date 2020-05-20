//VARIABLES
var text = document.querySelector("#text")
var wordCount = document.querySelector("#word-count")
var charCount = document.querySelector("#character-count")

//create an event listener for the textarea
text.addEventListener('input', function () {

    //get the word count
    var words = text.value.split(/[\n\r\s]+/g).filter(function (word) {
        return word.length > 0
    });

    //display the word count
    wordCount.textContent = words.length

    //display the character count
    charCount.textContent = text.value.length
})