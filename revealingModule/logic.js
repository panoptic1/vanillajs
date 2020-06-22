console.log(`let's go!`);

/*
=====================================THE REVEALING MODULE PATTERN================================================

*/

var library = (function(){

    //
    //VARIABLES
    //

    //Holds our public methods
    var methods = {};

    //
    //METHODS
    //
    //turn a nodeList into an array
    //@param {nodeList} list
    //@returns {Array}

    methods.arrayify = function (list) {
        Array.prototype.slice.call(list)
        return newArray;
    };

    //get the first matching element in the dom
    //@param {string, string} 
    //@return {string}
    methods.findClosest = function(element, selector){
        var el = document.getElementById(selector);
        var match = el.closest(element);
        return match;
    };

    //get all elements in the DOM as an array
    //@param {string} class, element, id
    //@return {Array} array of elements
    method.arrayifyElements = function (selector) {
        var list = document.querySelectorAll(selector);
        var elemArray = Array.prototype.slice.call(list);
        return elemArray; 
    }
    
    //return public methods
    return methods;

})();