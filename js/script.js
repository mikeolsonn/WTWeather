// Constants and variables
let weatherData, input;
const API_KEY = CONFIG.weatherAPIKey;
//TODO
const BASE_URL =  'https://proxify-app1.herokuapp.com/api';

// Cached Element References
const $city = $('#city');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');


const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');

// Event Listeners
$form.on('submit', handleGetData);
//Functions

//q={city name}&appid={API key}

function handleGetData(event) {

    event.preventDefault();

    input = $input.val();

    if(!input) return;
//TODO need to update so request is made to proxy server
    $.ajax(BASE_URL + '?city=' + input) //  <-- last part converts to degrees F
    .then(function(data) {
        
        
        weatherData = data;
        render();

        console.log(data);

    }, function(error) {
        console.log('Error', error);
    });
}


function render() {
    $city.text(weatherData.name);
    $temp.text('Temperature: ' + weatherData.main.temp);
    $index.text('Feels Like: ' + weatherData.main.feels_like);
    $desc.text(weatherData.weather[0].description);
}



// use img src="" with icon URL if u want 

/*


API DATA View:


{coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
base: "stations"
clouds: {all: 90}
cod: 200
coord: {lon: -71.06, lat: 42.36}
dt: 1602464402
id: 4930956
main: {temp: 50.68, feels_like: 42.31, temp_min: 46.99, temp_max: 54, pressure: 1025, …}
name: "Boston"
sys: {type: 1, id: 3486, country: "US", sunrise: 1602413569, sunset: 1602454112}
timezone: -14400
visibility: 10000
weather: [{…}]
wind: {speed: 10.29, deg: 80}
__proto__: Object


*/



// return `
// <article>
//     <h3>${weatherData.name}</h3>
//     <p>Temperature: ${weatherData.main.temp}</p>
//     <p>Feels Like: ${weatherData.main.feels_like}</p>
//     <p>Description: ${weatherData.weather[0].description}</p>
// </article>
// `;

// const weatherDetailUI = weatherData.Search.map(function(weather){
//     return `
//     <article>
//         <h3>${weatherData.name}</h3>
//         <p>Temperature: ${weatherData.main.temp}</p>
//         <p>Feels Like: ${weatherData.main.feels_like}</p>
//         <p>Description: ${weatherData.weather[0].description}</p>
//     </article>
//     `;
// });
// $main.html(weatherDetailUI);
// }