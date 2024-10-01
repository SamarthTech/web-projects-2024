const map = L.map('map').setView([20.5937, 78.9629], 5); // Initial map center on India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const apiKey = 'your API key'; // Make sure to secure your API key in production

// Separate function to add markers
function addMarkers() {
    const cities = [
        { name: "Delhi", lat: 28.7041, lon: 77.1025 },
        { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
        { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
        { name: "Chennai", lat: 13.0827, lon: 80.2707 },
        { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
        { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
        { name: "Pune", lat: 18.5204, lon: 73.8567 },
        { name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
        { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
        { name: "Lucknow", lat: 26.8467, lon: 80.9462 }
    ];
    

    cities.forEach(city => {
        const marker = L.marker([city.lat, city.lon]).addTo(map)
            .bindPopup(`<b>${city.name}</b>`);

        marker.on('click', () => {
            getWeatherData(city.lat, city.lon, marker);
        });
    });
}

function getWeatherData(lat, lon, marker) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data, lat, lon, marker);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayWeatherData(data, lat, lon, marker) {
    const details = document.getElementById('details');
    details.innerHTML = `<h2>Weather Data at ${data.name}</h2>
                         <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                         <p><strong>Weather:</strong> ${data.weather[0].main}</p>
                         <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>`;

    // Update the marker's popup with new data
    marker.setPopupContent(`<strong>${data.name}</strong><br>Temp: ${data.main.temp} °C<br>Weather: ${data.weather[0].main}`);
    marker.openPopup();
}

addMarkers(); // Initialize markers on the map
