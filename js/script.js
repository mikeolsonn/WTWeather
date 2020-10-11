// Constants and variables
let weatherData, userInput;
const API_KEY = 'd2995b380b6b9d5daf6ee3c221b46906';
const BASE_URL =  'https://api.openweathermap.org/data/2.5/weather?'

// Cached Element References
// const $title = $('#title');
// const $temp = $('#temp');
// const $index = $('#index');
// const $desc = $('#desc');

const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');

// Event Listeners
$form.on('submit', handleGetData);
//Functions

//q={city name}&appid={API key}

function handleGetData(event) {

    event.preventDefault();

    userInput = $input.val();

    if(!userInput) return;

    $.ajax(BASE_URL + 'q=' + userInput + '&appid=' + API_KEY) // + '&q=Boston&units=imperial' <-- last part converts to degrees F
    .then(function(data) {;
        console.log('DATA: ', data);
    }, function(error) {
        console.log('Error', error);
    })
}



// use img src="" with icon URL if u want 