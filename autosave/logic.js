//(solution by Chris Ferdinandi @ gomakethings.com)

//Variables

//define a prefix to use for all local storage keys
var storagePrefix = `form-autosave_`;

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
    //only run for fields in the #save-me form
    if (!event.target.closest(`#save-me`)) return;
    
    //get an ID for the field
    var id = getID(event.target);
    if (!id) return;

    //Save the field to local storage
    localStorage.setItem(storagePrefix + id, event.target.value);
};

/**
 * Load saved data from local storage 
 */
var loadData = function () {
    //Get all of the form fields
    var fields = document.querySelectorAll(`#save-me input`, `#save-me textarea`);

    //loop through each field and load any unsaved data in localStorage
    Array.prototype.slice.call(fields).forEach(function (field){

        //if the field has no usable id, then skip it
        var id = getID(field);
        if (!id) return;

        //if there's no saved value in localStorage, skip it
        //the getItem() method of the Storage interface will, when passed a key name, retrieve the keys stored value from local storage
        var saved = localStorage.getItem(storagePrefix + id);
        if (!saved) return;
        field.value = saved;
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
    clearData();

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