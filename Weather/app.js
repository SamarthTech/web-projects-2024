document.getElementById('search-btn').addEventListener('click', function()
{
    var city = document.getElementById('city-input').value;
    var apiKey = 'd42f487f103ac07de71cd4390a51aceb'; //i had to generate my own api key
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
    .then(response => response.json())
    .then(data =>
        {
            if (data.cod === '404') {
                document.getElementById('weather-info').innerHTML = '<p>City not found. Please try again.</p>';
            }
            else
            {
                displayWeather(data);
            }
        })
    .catch(error =>
        {
            console.error("Error fetching weather data:", error);
        });
});

function displayWeather(data) {
    const weatherInfo = `
        <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class="temp">${data.main.temp}°C</div>
            <div class="description">${data.weather[0].description}</div>
            <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
            <div><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
        </div>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}