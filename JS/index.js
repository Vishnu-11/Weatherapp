$(document).ready(function () {
    function convertKtoCelsius(num) {
        // Convert Kelvin to Celsius
        var celsius = Math.round(num - 273.15)+"C";
        return celsius;
    }
    function displayWeather(json) {
        var lat = json.coord.lat;
        var long = json.coord.lon;
        var weather = json.weather[0].description;
        var temp = json.main.temp;
        var temp_min = json.main.temp_min;
        var temp_max = json.main.temp_max;
        var pressure = json.main.pressure;
        var humidity = json.main.humidity;
        var windSpeed = json.wind.speed
        var weatherId = json.weather[0].id;
        console.log(temp,temp_min,temp_max);
        // var celsius = convertKtoCelsius(temp);
        // var fahrenheit = convertKtoFahrenheit(temp);
        var weatherCode = json.weather[0].icon;
        $("#location").text("Location");
        $("#locationdata").text("Latitude is " + lat + " and Longitude is " + long);
        $("#wefeel").text("Weather description");
        $("#wefeelval").text(weather);
        var temp = "the temp is " + convertKtoCelsius(temp);
        var mintemp = "the min temp is " + convertKtoCelsius(temp_min);
        var maxtemp = "the max temp is " + convertKtoCelsius(temp_max);
        var pres = "Pressure " + pressure;
        var hum = "humidity " + humidity;
        $("#maintemp").text("Temp details");
        $("#no1").text(temp);
        $("#no2").text(mintemp);
        $("#no3").text(maxtemp);
        $("#no4").text(pres);
        $("#no5").text(hum);
    }
    $("#searchbutton").click(function () {
        let city = $("#test").val()
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=06d71ec77b05fe87c8fe65596ad5dd48"
        $.getJSON(url, displayWeather);
        console.log(city);
    });
});
