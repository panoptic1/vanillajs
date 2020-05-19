//HOW TO CONVERT A STRING INTO AN ARRAY

//var myStuff =  `bicycle, computer, guitar, dust, debt`
//console.log(shoppingList);

//use the Array.split() method to turn the string into an array. 
//the first argument accepted by the method is called the delimiter, and it tells the browser what to 'split on'. 

//var arrayOfMyStuff = myStuff.split(", ");
//console.log(arrayOfMyStuff);

//it also accepts an optional second argument which limits the number of items put onto the array
//var goodStuff = myStuff.split(",", 3);
//console.log(goodStuff);


//HOW TO FILTER AN ARRAY
//the Array.filter() method creates a new array after 'filtering out' certain data that don't pass muster
//It accepts a callback function that does the filtering

//example: create a new array with only numbers that are less than ten
var numberArray = [1, 3, 6, 9, 11, 13, 16].filter(function (item) {
    return item < 10;
});
//console.log(numberArray);

var myStuff =  `bicycle, computer, guitar, dust, debt`
var arrayOfMyStuff = myStuff.split(", ");
//or: filter 'debt' and 'dust' from arrayOfMyStufff
var goodStuff = arrayOfMyStuff.filter(function(item){
    return item !== "debt" && item !== "dust"
});
console.log(goodStuff);

