//(solution by Chris Ferdinandi @ gomakethings.com)

//Variables

//define a prefix to use for all local storage keys
var storageID = `form-autosave`;

/**
 * Get an ID for a field
 * @param {Node} field The field
 * @return {String} the ID
 */
var getID = function (field) {

    if (field.id.length > 0){

        return field.id;
    }
    
    if (field.name.length > 0){
        return field.id;
    }
    
    return null;

};

/**
 * Handle Input Events
 * @param {Event} the event object
 */
var inputHandler = function ( event ) {
    console.log(event);
    //only run for fields in the #save-me form
    if (!event.target.closest(`#save-me`)) return;
    
    //get an ID for the field
    var id = getID(event.target);
    if (!id) return;

    //Get existing data from local storage
    var saved = localStorage.getItem(storageID);
    saved = saved ? JSON.parse(saved) : {};
    
    //Add the field to the local storage object
    saved[id] = event.target.value;

    //Save the object back to local storage
    localStorage.setItem(storageID, JSON.stringify(saved));
};

/**
 * Load saved data from local storage 
 */
var loadData = function () {
    
    //Get local storage data
    var saved = localStorage.getItem(storageID);
    if (!saved) return;
    saved = JSON.parse(saved);

    //Get all of the form fields
    var fields = document.querySelectorAll(`#save-me input, #save-me textarea`);

    //Loop through each field and load any saved data in local storage
    Array.prototype.slice.call(fields).forEach( function (field) {
        //If the field has no usable ID, then skip it
        var id = getID(field);
        if (!id) return;

        //If there's no data saved in local storage, then skip it
        if (!saved[id]) return;

        //set the field value to the data saved in local storage
        field.value = saved[id];
    });

};

/**
 * Load saved data from local storage 
 */
var clearData = function () {
    //Get all of the form fields
    var fields = document.querySelectorAll(`#save-me input`, `#save-me textarea`);

    //loop through each field and load any unsaved data in localStorage
    Array.prototype.slice.call(fields).forEach(function (field){

        //if the field has no usable id, then skip it
        var id = getID(field);
        if (!id) return;

        //remove the item from local storage
        localStorage.removeItem(storagePrefix + id);
    });
};

/**
 * Handle Submit Events
 * @param {Event} event The event object
 */ 
var submitHandler = function (event) {
    //only run for the #save-me form
    if (event.target.id !== `save-me`) return;

    //clear saved data
    localStorage.removeItem(storageID);

};

//
//Inits and Event Listeners
//

//load saved data from storage
loadData();

//add an event listener for *input* events. 
//note: input events fire any time that the input form field changes (before any clicking occurs)
document.addEventListener(`input`, inputHandler, false);

//add an event listener for 'submit' events to wipe the fields of any data upon save
document.addEventListener(`submit`, submitHandler, false);