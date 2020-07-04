//=============================EXPIRING DATA======================================

//Unlike cookies, there is no native method to expire the data that you save in localStorage.
//This is why you keep noticing whatever random data that you saved there from the last time every time you open the Applications tab in Dev tools.
//HOWEVER there is a solution to this problem:

/**
 * Save your data as an object with 2 keys:
 * 1. the 'data' key will hold the data itself
 * 2. the 'timestamp' key will create a timestamp of the moment that the data is saved. 
 *    It can then be compared to the current time at a given moment. 
 *
 */

 //data to be saved to local storage:

 var discArsenal = {
    data: {
        distanceDriver: `Destroyer`,
        fairwayDriver: `Amp`,
        fadingDriver: `Ahti`,
        midRange: `mx-3`,
        putter: `xt`
    },
    timeStamp: new Date().getTime()
 };

//save to localStorage
localStorage.setItem(`discs`, JSON.stringify(discArsenal));

//now you can make a helper function which validates the data as it comes back from localStorage

var isDataValid = function (saved, goodFor) {

    //check that there's data as well as a timestamp key
    if(!saved || !saved.data || !saved.timeStamp) return false;

    //get the difference between the timestamp and the current time
    var difference = new Date().getTime() - saved.timeStamp;

    return difference < goodFor;
};

var saved = JSON.parse(localStorage.getItem(`discs`));

//Check if it's been less than a minute since the data got saved
if (isDataValid(saved, 4)){//This is the lowest number that can be used as an argument for the data to come back "young" when refreshing the browser
    //the data is young
    console.log("Dat yung data");
} else {
    //the data is old
    console.log("OG data don't play");
}
