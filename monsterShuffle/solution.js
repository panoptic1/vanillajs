console.log("Let's shuffle monsters!");

// The monsters and socks
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


/* Use Map to wrap each of the Monsters in markup so they display on the grid. Wrap each monster in an img tag 
and give each tag a src attribute which corresponds to the correct monster in the 'Monsters' folder.*/
app.innerHTML = monsters.map(function (monster){
	return `<img src="../Monsters/monster` + monster + `.svg" alt="` + monster + `">`
});


//Embed a helper function inside of the map function which uses the Fisher Yates Algorithm to shuffle the Monsters