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
    //turn an array-like object into an array
    //@param {nodeList} list
    //@returns {Array}

    methods.toArray = function (list) {
        return Array.prototype.slice.call(list);
    };

    //get the first matching element in the dom
    //@param {string} selector (the selector)
    //@return {Node} (the matching element)
    methods.get = function(selector){
        return document.querySelector(selector);
    };

    //get all elements that match a selector
    //@param {Array} class, element, id
    //@return {Array} array of elements
    methods.getAll = function (selector) {
        return methods.toArray(document.querySelectorAll(selector));
    };

    //add a class to all elements that match a selector
    //@param {Array} elems  The elements
    //@param {String} className     The class to be added
    methods.addClass = function (elems, className) {
        elems.forEach(function (elem){
            elem.classList.add(className);
        })
        
    };

    /**
     * remove a class from all elements in an array
     * @param {Array} elems     The elements
     * @param {String} className    The class to remove
     */

    methods.removeClass = function (elems, className) {
        elems.forEach(function (elem) {
            elem.classList.remove(className);
        });
    }
    
    //return public methods
    return methods;

})();