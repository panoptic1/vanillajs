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
    
    //return public methods
    return methods;

})();