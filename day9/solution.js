//CHALLENGE: Write a script that calculates both the number of characters and the number of words that are input
//into a textarea

//declare an event listener to listen for any text input
document.addEventListener('input', function(event){
    //declare a variable called 'characters' to target the total characters logged into the <textarea> element
    //follow the day 7 solution in order to accomplish this
    let characters = document.querySelector('#text').value.length
    //console.log(characters);

    //declare a variable called 'words' to target the number of words written into the <textarea> element by the user
    //use the split method to determine how many words are in the textarea
    let words = document.querySelector('#text').value.split(/\s+/);
    console.log(words);

    //declare a variable called 'characterCount' that targets the span for the character counter
    //set the value of 'characterCount.textContent' to 'characters'
    let characterCount = document.querySelector('#character-count');
    characterCount.textContent = characters

    //declare a variable called 'wordCount' that targets the span for the word counter
    //set the value of 'wordCount.textContent' to 'words.length'
    let wordCount = document.querySelector('#word-count');
    wordCount.textContent = words.length - 1
})



