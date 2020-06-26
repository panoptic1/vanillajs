console.log("Let's learn about autosave!");

/**
 * LOCAL STORAGE AND SESSION STORAGE
 * You can store and view items in your in your browser's "Storage" tab (which is hidden under "applications" in Chrome)
 * 
 */

 localStorage.setItem('son', 'Damon');

 //Get from local storage
 var son = localStorage.getItem('son');
 console.log(son);