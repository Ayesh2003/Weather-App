function searchLocation(){
    let searchTxt = document.getElementById("searchtxt").value;
    fetchWeatherData(searchTxt);
}

const apiKey ="002b1bad348e4d4286945422230110";

function fetchWeatherData(location) {
    let icon = document.getElementById("icon");
    let temp_c = document.getElementById("tempText");
    let weatherCastTxt = document.getElementById("weatherCastTxt");
    $.ajax({
      method: "GET",
      url: `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} &aqi=no`,
      success: (data) => {
        console.log(data);
        // countryP.text(data["location"]["country"]);
        temp_c.innerHTML=(data["current"]["temp_c"] + "°C");
        // latP.text(data["location"]["lat"]);
        // lonP.text(data["location"]["lon"]);
        // nameP.text(data["location"]["name"]);
        // regionP.text(data["location"]["region"]);
        weatherCastTxt.innerHTML=(data["current"]["condition"]["text"]);
        // humidity.text(data["current"]["humidity"]);
        // tz_id.text(data["location"]["tz_id"]);
        // wind_kph.text(data["current"]["wind_kph"] + "kph");
        icon.src = data["current"]["condition"]["icon"];
      }
    });
  }