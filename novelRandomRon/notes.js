//...from the last review

//One way to make the page reload:
//Window.location.reload(); (not sure when I would use this necessarily)

//One way to create a new element
//document.createElement('div');

//========TO-DAY!===========
//****Getting items from an Array******/
var sandwiches = ["turkey", "tuna", "cuban", "french dip"];
console.log(sandwiches[0]);
//use index notation to zero in on a specific item within an array

//If you want to add something to an array, you can use Array.push("item") to push "item" onto the last index of an array
sandwiches.push("blt");
console.log(sandwiches);

//Array.includes will let you check to see if a value exists in an array. 
if (sandwiches.includes("tuna")){
    console.log("How about a tuna sandwich?");
} else {
    console.log("How about a pb&j?");
}


