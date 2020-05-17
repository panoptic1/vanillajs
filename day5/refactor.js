//Instead of targeting the checkbox with an event listener, use 'event delegation' (study this term)
//listen to all click events in the browser through the document object...

document.addEventListener('click', function (event){
    //console.log("I love this document!")

    //check whether the clicked item was a password toggle
    // if(!event.target.matches('[data-pw-toggle')) {
    //     console.log("Definitely not a toggle.")
    // } else {
    //     console.log("You found a toggle!")
    // }

    //if the clicked element is not a toggle, stop running the function with 'return'
    if(!event.target.matches('[data-pw-toggle]')) return;

    //console.log("The function is still running, yo!")

    //create a variable that gets the value of the [data-pw-toggle] attribute in every element where it appears
    const passwords = Array.prototype.slice.call(document.querySelectorAll(event.target.getAttribute('data-pw-toggle')))
    //console.log(passwords)

    //loop through each password field
    passwords.forEach(function (password) {
        if (event.target.checked) { //I remember that the condition I used last time was checkbox.checked...worse?
            password.type="text"
        } else {
            password.type="password"
        }
    })

});

//console.log(document); //(log in case you are wondering: "What is this 'document' you speak of?")