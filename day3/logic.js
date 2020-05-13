//VARIABLES - Create a variable that grabs all of the input fields with .querySelectorAll
//var input = document.querySelectorAll("input");

//Convert the Node List created by .querySelectorAll with an array with the Array.prototype.slice.call() method...
var passInput = Array.prototype.slice.call(document.querySelectorAll(".password"));

var checkBox = document.querySelector("#show-passwords");

//Make an event listener that gets triggered when the user clicks the checkbox
checkBox.addEventListener('click', function(event){
    convertPass();
})
//Create a call back function that loops through each element on the array and changes the input type when
//the user checks the checkbox

function convertPass(){
    passInput.forEach(function(element, index){
        //if (input.type="checkbox") return; //I tried to use this to skip this item on the array, but it made the code stop
        //console.log("Nice callback, buddy!");
        if (checkBox.checked) {
            element.type="text"
        } else {
            element.type="password"
        }
    })
}
