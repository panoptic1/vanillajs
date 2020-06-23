var $ = (function(){


    /**
     * Create the constructor
     * @param {String} selector The selector to use
     * 
     */
    
     var Constructor = function ( selector ) {
        this.elems = document.querySelectorAll(selector);
    };

    //
    //METHODS
    //

    /**
     * Get an immutable copy of the matching elements
     * @ return {Array} the elemnents
     */

     Constructor.prototype.items = function () {
        return Array.prototype.slice.call(this.elems)
     };

    /**
     * Get the first item in a set of elements
     * @return {*} The first item
     */

     Constructor.prototype.first = function () {
        return this.elems[this.elems.length - 1];
     };

    /**
     * Add a class to every item in a set of elements
     * @param {String} className    (the class to add)
     */

     Constructor.prototype.addClass = function (className) {
         this.items().forEach(function (elem) {
            elem.classList.add(className);
         });
         return this;
     }

    /**
     * Remove a class from every item in a set of elements
     * @param {String} className (the class to remove)
     */

     Constructor.prototype.removeClass = function (className) {
         this.items().forEach(function (elem) {
             elem.classList.add(className);
         });
         return this;
     }


    //return public methods
    return Constructor;

})();

//Create new instantiations of the library
     
var btns = new $('button');
var list = new $('ul');
console.log(btns);
console.log(list);