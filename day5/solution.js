console.log("Let's do this!");

//TOGGLE PASSWORD VISIBILITY IN MULTIPLE FORMS
//Make both checkboxes toggle password visibility for their own respective forms

//VARIABLES
//create variables for each of the password input fields

//password - line 32
const PW = document.querySelector('#password')
console.log(PW);

//current password - line 54 &&& new password - line 59 (I added a class of 'change' in keeping with day 3 solution)
const newPW = Array.prototype.slice.call(document.querySelectorAll(".change"))
console.log(newPW);

//create variables to target the checkboxes

//checkbox 1 - line 37
const checkbox1 = document.querySelector('#show-password')
console.log(checkbox1);

//checkbox 2 - line 64
const checkbox2 = document.querySelector('#show-passwords')
console.log(checkbox2);

//FUNCTIONS
//create a function that converts the data type of the 'password' field
function convertPassword(){
    //console.log("Top notch function, governor!")
    if (checkbox1.checked){
        PW.type = "text"
    } else {
        PW.type = "password"
    }
}

//create a function that converts the data type of BOTH the 'current' and 'new' password fields
function convertNewPassword(){
    //console.log("Another function successfully defined!")
    newPW.forEach(function(element, index){
        if (checkbox2.checked){
            element.type = "text"
        } else {
            element.type = "password"
        }
    })

}

//create an event listener for checkbox 1 that executes the callback function for form 1
checkbox1.addEventListener('click', function(){
    convertPassword();
});

//create an event listener for checkbox 2 that executes the callback function for form 2
checkbox2.addEventListener('click', function(){
    convertNewPassword();
});