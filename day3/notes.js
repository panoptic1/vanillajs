//Notes for today...
//document.querySelectorAll()
//use it to grab multiple elements with the same selector.

//const passFields = document.querySelectorAll(".password");

//array.forEach(function(arrayItem, index){
// })
//use it to loop through each item on an array and perform some operation for each .

// const family = [
//     "ryan",
//     "jazmin",
//     "damon",
//     "rosalyn"
// ];

// family.forEach(function(member, index){
//     //if (member === "ryan") return;
//     console.log(index);
//     console.log(member);
// });

//Worth noting: there's no way to stop looping with 'continue' or 'break' with this method. 
//Instead, you can use 'return' to pass over an item on the loop. See line 19. 
//There is no good way to eliminate an item from the array with this method. 

//FACT: Array methods like Array.forEach() cannot be used on Array-like variables like NodeLists

//FACT: querySelectorAll() returns a NodeList

//WORKAROUND: You can use Array.prototype.slice.call() to convert NodeLists and other array-like variables
//into actual arrays

//(the slice method accepts two arguments which represent the beginning and ending points that you wish to render
//in a new array. If only one argument is passed into the method, the new array will start at that index and 
//and go to the end of the array)
//console.log(family.slice(1));
//expected output: ["jazmin", "damon", "rosalyn"]

//const passFieldsArray = Array.prototype.slice.call(document.querySelectorAll(".password"));
//console.log(passFieldsArray);

// .textContent will take the inner text from any element. Use it in the forEach method to print the text of the
//password fields

// passFieldsArray.forEach(function(field, index){
//     console.log(field.textContent);
// })

//FIRST DRAFT
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


