const weatherDiv = document.querySelector('[data-weather]');
const today = new Date();
console.log(weatherDiv);

// Append location name to the weather div
function addLocationName(object) {
    console.log(object);
}

// Add temperature to weather div
function addTemp(object) {
    
}

// Add wind speed to weather div
function addWind(object) {

}

// Add icon to weather div
function addIcon(object) {
    // get icon code from object
    
    // Use the icon code to get the icon using OpenWeatherMap.org
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    // Create a new image element using the iconUrl

    // Add the weather conditions to an h2 element

    // Append the text and image to the weatherDiv


}
// adds whatever data is passed to the weather div
function addToWeather(data) {

}

// creates map showing lat long of weather info
function addMap(object) {
    // get lat and long coordinates
    
    // Use the Lat/Long to create a map
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;

    // create iframe and set attributes
    const iframe = document.createElement('iframe');

}

function sunInfo(object, timeOfDay) {
    // get sunrise and sunset info
    let sunrise = object.sys.sunrise;
    let sunset = object.sys.sunset;
    // convert to standard date format
    unixTimeConverter(sunrise);
    unixTimeConverter(sunset);
}

// add correctly formatted dates to the page
function formatDate(date) {
    // Get the date
    const day = date.getDate();
    // Get the month
    // month starts at 0
    const month = date.getMonth() + 1;
    //console.log(month);
    const year = date.getFullYear();

    // Get the hours
    const hours = date.getHours();
    //console.log(hours);
    // Get the minutes
    let minutes = date.getMinutes();
    //console.log(minutes);
    // if statement to reformat minutes
    // from a single digit to a two digit with a leading zero
    // i.e. change "1" to "01"
    
    // Get seconds
    let seconds = date.getSeconds();
    //console.log(seconds);
    // Format the time in a friendly format
    console.log(`${hours}:${minutes}:${seconds}`);
    // Format the date in a friendly format
    console.log(`${month}/${day}/${year}`);
    // Return the date and time...
    return
}

function unixTimeConverter(time){
    let a = new Date(time*1000);
    let hr = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let convertedTime = `${hr}:${min}:${sec}`
    console.log(convertedTime);
}

// Use the below URL to make a fetch request, 
// and then run the above functions to populate the page
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1";

get(URL)
.then(function(response){
    console.log(response);
    sunInfo(response, today);
})


formatDate(today);