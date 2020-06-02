console.log("Let's go!");
var sandwiches = ["turkey", "tuna", "french dip", "cuban", "blt"];

//Use the slice method to create a new, small array from an already existing one.
//It accepts up to two optional arguments representing which index the slice should start on:
var fewerSandwiches = sandwiches.slice(2);
console.log(fewerSandwiches);
