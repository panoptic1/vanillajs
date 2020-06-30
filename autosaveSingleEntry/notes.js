/**
 * ARRAYS AND OBJECTS WITH LOCAL STORAGE AND SESSION STORAGE++++++++++++++++++++++++++++++++++++++++++++++
 * 
 */

//A lunch order
var lunch = {
    sandwich: `tuna`,
    chips: `salt and vinegar`,
    drink: `coke`,
};

//convert the lunch order object into a string

var lunchString = JSON.stringify(lunch);
console.log(lunchString);

//drink options
var drinks = [`arnold palmer`, `john daly`, `jack daniels`];

//convert the drinks array into a string
var drinkString = JSON.stringify(drinks);
console.log(drinkString);

