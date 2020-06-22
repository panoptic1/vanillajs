/*
=====================================THE REVEALING MODULE PATTERN================================================

*/

var wu = (function(){

    //
    //VARIABLES
    //

    var clanMembers = [`rza`, `gza`, `odb`, `methodMan`, `inspektahDek`, `raekwon`, `ghostFace`]
    var lyrics = {
        cream : "cash rules everything around me",
        triumph : "i bomb atomically",
        aintNothin: "wu tang clan ain't nothin' to fuck with",
        itsYours : `the world in the palm of your hands`,
        shame : `blau! how you like me now?`
    };
    
    //Holds our public methods
    var methods = {};
    //
    //METHODS
    //
    
    /**
     * Copy an array
     * @param {Array} arr the original
     * @return{Array}     A copy
     */
    var copy = function(arr){
        return arr.slice();
    }

    /**
     * get an immutable copy of da clan
     * @return {Array} da clan
     */

    methods.getClan = function () {
        return copy(clanMembers)
    };

    /**
     * spit some bars
     * @param {string} 
     */
    methods.spitBars = function (track) {
        console.log(lyrics[track]);
    }

    methods.allClanSpits = function ( track ) {
        clanMembers.forEach( function ( member ){
            console.log( member + `:` ),
            methods.spitBars( track )
        })
    }

    //return public methods
    return methods;
})();