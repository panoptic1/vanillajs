var library = (function(){

    //
    //VARIABLES
    //
    var buttons = document.querySelectorAll(`.btn-blue`);

    //Holds our public methods
    var methods = {};

    //
    //METHODS
    //
    //turn a nodeList into an array
    //@param {nodeList} list
    //@returns {Array}

    methods.arrayify = function (list) {
        var newArray = Array.prototype.slice.call(list)
        console.log(newArray);
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
    methods.arrayifyElements = function (selector) {
        var list = document.querySelectorAll(selector);
        var elemArray = Array.prototype.slice.call(list);
        return elemArray; 
    };

    //add a class to all elements in an array
    //@param {string, array} class to be added, array of elements
    //@return {Array} array of elements with new class
    methods.classifyArrayElements = function (class, array) {
        var classyArray = array.forEach(element => {
            element.classlist.add(class);
            console.log(element.classlist);
            return classyArray;
        });
    };

    methods.classifyArrayElements(`bingo`, buttons);
    
    //return public methods
    return methods;

})();