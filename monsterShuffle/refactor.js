var monsters = [
    'monster1',
    'monster2',
    'monster3',
    'monster4',
    'monster5',
    'monster6',
    'monster7',
    'monster8',
    'monster9',
    'monster10',
    'monster11',
    'sock'
];

var app = document.querySelector(`#app`);

//Write a function that shuffles array with the FY algorithm
var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    //While there remains an index to shuffle...
    while (0 !== currentIndex) {
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array

};

shuffle(monsters);

app.innerHTML = `<div class="row">` + monsters.map( function (monster){
    var html = 
    `<div class="grid">` +
        `<img alt ="` + monster +`" src="` + monster + `.svg">` +
    `</div>`;

    return html;
    
}).join(``) + `</div>`;