//Solution derived from Chris Ferdinandi, Vanilla JS Academy

//Turn the node List of h2 elements into an actual array.
chapters = document.querySelectorAll('h2');

//Target the table-of-contents div box
tableOfContents = document.querySelector("#table-of-contents");
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
                return `<li><a href="#` + chapter.id + `">` + chapter.textContent + `</a></li>`;
            }).join('') +
        `</ol>`;
}