// avoid the global scope
// create a function that will serve as the plugin for this app
var createForecast = function (options) {
    
    var defaults = {
        selector: `#app`,
        city: ``,
        state: ``,
        country: ``,
        postal: ``,
        icon: ``,
        description: ``,
        celsius: ``,
        fahrenheit: ``,
        windDirection: ``,
        windSpeed: ``,

    };

    var settings = Object.assign(defaults, options)

    var key = `b2f0c7d69dc446289736467fbe50c452`;

    
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

    
    //define the renderWeather function using the variables that we're created in the default settings of the plugin
    var renderWeather = function(){
        console.log(settings);
        var forecast = `
        <h2>Current conditions in ` + sanitizeHTML(settings.city) + `</h2>
        <p>The temperature is ` + sanitizeHTML(settings.fahrenheit) + `</p>
        <p>Here's the wind: ` + sanitizeHTML(settings.windDirection) + `</p>
        `
        console.log(`City: ` , settings.city);
        console.log(`Fahrenheit: ` , settings.fahrenheit);
        console.log(`Wind Direction: `, settings.windDirection);
        var display = document.querySelector(settings.selector);

        display.innerHTML = forecast
    }

    //get json
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

            //set the values of the settings keys to the corresponding data that comes back from the api
            //location values...
            settings.city = data.city;
            settings.postal = data.postal;
            settings.state = data.state;
            settings.country = data.country; 
            //console.log(data);
        
            fetch(`https://api.weatherbit.io/v2.0/current?postal_code=`+ settings.postal + `&country=`+ settings.country + `&key=` + key)
                .then( function ( response ){
                    if (response.ok){
                        return response.json();
                    }
                    else {
                        return Promise.reject(response);
                    }
                }).then ( function ( data ){
                    
                    //set the value as the relevant index on the array that comes back from the api
                    data = data.data[0];
                    console.log(data);

                    //set the values for the weather-related keys in settings
                    settings.icon = data.weather.icon;
                    settings.description = data.weather.description;
                    settings.celsius = data.temp;
                    settings.windDirection = data.wind_cdir_full;
                    settings.windSpeed = data.wind_spd;
                    settings.fahrenheit = (settings.celsius * 9 / 5) + 32;
                    
                }).then(renderWeather)
                .catch(function (error) {
                app.textContent = `I'm forecasting a trip to the app store for a better weather app.`;
                console.warn(error);
            })
            
        });
        
    };
    
    getWeatherInfo();
    //set variables
    //create a template
    //render into the UI
};

createForecast();
