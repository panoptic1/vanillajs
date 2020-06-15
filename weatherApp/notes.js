//Here's what the weather API call needs to look like:
//https://api.weatherbit.io/v2.0/current?postal_code=89084&country=US&key=

//============================PROMISES + MULTIPLE APIs==========================================
//Declare a variable called 'post' without a value in order to store the information from the ipapi
var key = `b2f0c7d69dc446289736467fbe50c452`;
var city;
var postal;
var state;
var country;

function getWeatherInfo(){
//Call the API
fetch(`https://ipapi.co/json`).then( function ( response ){
    if (response.ok){
        return response.json();
    }
    else{
        return Promise.reject(response);
    }
}).then( function (data){
    city = data.city;
    postal = data.postal;
    state = data.state;
    country = data.country; 
    console.log(data);

    fetch(`https://api.weatherbit.io/v2.0/current?postal_code=`+ postal + `&country=`+ country + `&key=` + key)
        .then( function ( response ){
            if (response.ok){
                console.log("Success!")
                return response.json();
            }
            else {
                return Promise.reject(response);
            }
        }).then ( function ( data ){
            console.log(data.data[0].temp);
        })
    
});

};

getWeatherInfo();