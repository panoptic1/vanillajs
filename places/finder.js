//Rhode Island API
//https://vanillajsacademy.com/api/places.json

//Declare a 'new Reef'. Following the conventions that we used for our invented framework 'Rue'
var app = new Reef('#app', {
    //Set the value of the data key to an empty object.
    data: {},
    
	template: function (props) {
        //console.log(props);
		props.forEach( function () {
            return `<h2>` + props.place + `</h2>`
        });
	}
});

fetch(`https://vanillajsacademy.com/api/places.json`).then( function (response) {
    return response.json();
}).then( function (data){
    Array.prototype.slice.call(data);
    return data;
}).then( function (data){
    app.data = data
})

app.render();

