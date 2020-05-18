//console.log("let's go!")

//create an event listener for text input anywhere in the document
document.addEventListener('input', function(event){
    //declare a variable that will target the input inside the textarea
    let text = document.querySelector('#text').value
    //console.log(text);
    console.log(text.length);
})

    
    
    
//VARIABLES