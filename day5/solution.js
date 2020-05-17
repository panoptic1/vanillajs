//TOGGLE PASSWORD VISIBILITY IN MULTIPLE FORMS
//Make both checkboxes toggle password visibility for their own respective forms

//VARIABLES
//variables to grab the values from the password input fields
const PW = document.querySelector('#password');
const newPW = Array.prototype.slice.call(document.querySelectorAll(".change"));
console.log(newPW);

//create variables to target the checkboxes
const checkbox1 = document.querySelector('#show-password');
const checkbox2 = document.querySelector('#show-passwords');

//FUNCTIONS
//create a function that converts the data type of the 'password' field
function convertPassword(){
    if (checkbox1.checked){
        PW.type = "text"
    } else {
        PW.type = "password"
    }
};

//create a function that converts the data type of BOTH the 'current' and 'new' password fields
function convertNewPassword(){
    newPW.forEach(function(element, index){
        if (checkbox2.checked){
            element.type = "text"
        } else {
            element.type = "password"
        }
    });

};

//create an event listener for checkbox 1 that executes the callback function for form 1
checkbox1.addEventListener('click', function(){
    convertPassword();
});

//create an event listener for checkbox 2 that executes the callback function for form 2
checkbox2.addEventListener('click', function(){
    convertNewPassword();
});