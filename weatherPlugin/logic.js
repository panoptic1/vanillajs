//avoid the global scope
// var createForecast = function () {
//     var defaults = {
//         selector: 
//     }
// }

(function(){

    //VARIABLES
    //target the div box
    elem = document.querySelector('#app');
    
    //declare variables for the specific data to be modified and rendered
    var key = `b2f0c7d69dc446289736467fbe50c452`;
    var city;
    var postal;
    var state;
    var country;
    var rawTemp;
    var tempFahrenheit;
    var windSpeed;
    var windDirection;
    var html;
    
    
    //FUNCTIONS
    //get API info
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
                    
                    rawTemp = data.data[0].temp;
                    windSpeed = data.data[0].wind_spd;
                    windDirection = data.data[0].wind_cdir_full;
                    convertTemp();
                    
            }).catch(function (error) {
                app.textContent = `I'm forecasting a trip to the app store for a better weather app.`;
                console.warn(error);
            })
            
        });
        
    };
    
    getWeatherInfo();
    
    //convert the given temperature from celsius to fahrenheit
    function convertTemp(){
        console.log("Let's convert that temp!");
        tempFahrenheit = (sanitizeHTML(rawTemp) * 9 / 5) + 32;
        renderWeather();
    }
    
    //create an html template to use to render the data into the UI
    //sanitize the data and render it in the UI
    function renderWeather(){
        var html = `
        <p>The temperature in ` + sanitizeHTML(city) + ` right now is ` + tempFahrenheit + ` fahrenheit.
        Winds are currently coming out of the ` + sanitizeHTML(windDirection) + ` at around ` + sanitizeHTML(windSpeed) + ` miles per hour.</p>
        `
    
        app.innerHTML = html;
    
    };
    
    /*!
    * Sanitize and encode all HTML in a user-submitted string
    * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
    * @param  {String} str  The user-submitted string
    * @return {String} str  The sanitized string
    */
            var sanitizeHTML = function (str) {
                var temp = document.createElement('div');
                temp.textContent = str;
                return temp.innerHTML;
            };
    
    })();