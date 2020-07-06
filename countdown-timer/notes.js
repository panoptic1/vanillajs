console.log("Let's go!");

//===========WTF IS STATE?===================
//STATE is data.
//There is a time-bound aspect to it:
//It is the data at a particular moment in time.
//It is the STATE of your data at the present moment.

//=============STATE-BASED UI================
//With a state-based approach, you save all of you data to a JS object.
//Then, you use JS to build the DOM with the current state of the data. 
//There are three necessary ingredients to cook in this fashion:

//  1. A data object
var data = {
    authors : [`Russell Banks`, `Don DeLillo`, `Ta-Nehisi Coates`]
};

//  2. A template for how the UI should look
var template = function ( props ) {
    var html =
    `<ul>` + 
        props.authors.map( function (author) {
            return `<li>` + author + `</li>`
    }).join('') +
    `</ul>`;
    return html;
};

//  3. A way to render the template into the DOM
var app = document.querySelector(`#app`);
app.innerHTML = template(data);

//=============STATE-BASED COMPONENTS============