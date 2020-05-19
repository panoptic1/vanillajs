//create an event listener for text input anywhere in the document
document.addEventListener('input', function(event){
    
    //declare a variable that will target the input inside the textarea
    let text = document.querySelector('#text').value.length;
    //set the text variable to the length of the input
    text == text.length;
    //convert the value for text from a number to a string
    //text = text.toString();
    
    //declare variable that targets the text content of the span
    let count = document.querySelector('#character-count');
    
    //print a new value to span by setting 'count.textContent' to the value of 'text'
    count.textContent = text

})