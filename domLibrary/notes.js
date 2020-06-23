//Create a new constructor function
var WuTang = (function(){

    //
    //VARIABLES
    //

    //create new Constructor function
    var Constructor = function (members, tracks) {
        
        //Store the unique properties
        this.members = members;
        this.tracks = tracks
    };

    //return the Constructor
    return Constructor;

})();

var concert1 = new WuTang();
var concert2 = new WuTang();