//Day 1
//Getting an element from the DOM with querySelector
//The first div...
// const elem = document.querySelector('#show-password');
// console.log(elem);

// The first heading...
// const heading = document.querySelector('#greeting');
// console.log(heading);

// The first paragraph...
// const paragraph = document.querySelector('.lorem');
// console.log(paragraph);

//Add an event listener to the button
// const btn = document.querySelector('#click-me-1');
// //console.log(btn);
// btn.addEventListener('click', function(event){
//     console.log("You pushed the button!");
//     console.log(event); //the event details
//     console.log(event.target); //the clicked element
// }, false);




//VARIABLES=============================================================
const password = document.querySelector('#password');
const checkBox = document.querySelector('#show-password');

//Create a function that converts the input of the password field when checkbox is toggled
function convertPassword(){
    if(checkBox.checked){
        //console.log("Nice password!");
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

//When the user clicks the checkbox, run the convertPassword function
checkBox.addEventListener('click', function(event){
    convertPassword();
}, false);