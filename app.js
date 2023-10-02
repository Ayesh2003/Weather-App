function searchLocation(){
    let searchTxt = document.getElementById("searchtxt").value;
    fetchWeatherData(searchTxt);
}

const apiKey ="002b1bad348e4d4286945422230110";

getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
    fetchWeatherData(position.coords.latitude+","+position.coords.longitude);
}

function fetchWeatherData(location) {
    let icon = document.getElementById("icon");
    let temp_c = document.getElementById("tempText");
    let weatherCastTxt = document.getElementById("weatherCastTxt");
    let locatxt = document.getElementById("locatxt");
    let city = document.getElementById("city");
    let wind = document.getElementById("wind");

    $.ajax({
      method: "GET",
      url: `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
      success: (data) => {
        console.log(data);
        // countryP.text(data["location"]["country"]);
        temp_c.innerHTML=(data["current"]["temp_c"] + "°C");
        // latP.text(data["location"]["lat"]);
        wind.innerHTML = (data["current"]["wind_kph"]+"km/h")
        city.innerHTML=(data["location"]["name"])
        locatxt.innerHTML=(data["location"]["region"]);
        weatherCastTxt.innerHTML=(data["current"]["condition"]["text"]);
        // humidity.text(data["current"]["humidity"]);
        // tz_id.text(data["location"]["tz_id"]);
        // wind_kph.text(data["current"]["wind_kph"] + "kph");
        icon.src = data["current"]["condition"]["icon"];
      }
    });
  }