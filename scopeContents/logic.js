(function(){
    console.log("This is inside of an IIFE.");
})();

var generateContents = function () {
    //Turn the node List of h2 elements into an actual array.
var chapters = document.querySelectorAll('h2');

//Target the table-of-contents div box
var tableOfContents = document.querySelector("#table-of-contents");
console.log(tableOfContents);

//Make sure that there is at least one 'chapter'.
//Only generate markup if there is at least one h2 element
if (chapters.length > 0) {

    //set the HTML for the table of contents container
    //Add a heading and ordered list. 
    tableOfContents.innerHTML = 
        `<h2>Table of Contents</>` +
        `<ol>` +
            Array.prototype.slice.call(chapters).map( function (chapter) {
                //check to see whether there is an ID on each of the h2 elements
                //if chapter.id.length is less than 1, then there is no ID
                if (chapter.id.length < 1){
                    //create an ID
                    chapter.id = chapter.textContent.replace(/[^a-z0-9]+/gi, '-');
                }
                //create an anchor link for each of the chapters and wrap each in an li tag
                return `<li><a href="#` + chapter.id + `">` + chapter.textContent + `</a></li>`;
            }).join('') +
        `</ol>`;
}
}

generateContents();
