import { getForecast } from "./api/openweather.js";
import { createMap, getCoordinates } from "./api/mapbox.js";

const updateWeatherInfo = (forecast) => {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    const cardDeck = document.createElement("div");
    cardDeck.className = "row";

    forecast.daily.slice(0, 5).forEach(day => {
        const card = document.createElement("div");
        card.className = "col-md-2";

        const date = new Date(day.dt * 1000);
        const dateString = date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' });

        card.innerHTML = `
            <div class="card mb-3 custom-card">
                <div class="card-header custom-card-header">${dateString}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item custom-list-item">Temperature: ${day.temp.day}°C</li>
                    <li class="list-group-item custom-list-item">Conditions: ${day.weather[0].description}</li>
                </ul>
            </div>
        `;

        cardDeck.appendChild(card);
    });

    forecastContainer.appendChild(cardDeck);
};

const updateCity = (city) => {
    const cityElement = document.getElementById("currentCity");
    cityElement.textContent = `Current City: ${city}`;
};

const handleSearch = async (searchInput, mapCreator, forecastGetter, weatherUpdater, cityUpdater) => {
    console.log("Search input:", searchInput);

    const latLong = await getCoordinates(searchInput);
    console.log("Coordinates:", latLong);

    if (latLong) {
        mapCreator("map", latLong);
        const forecast = await forecastGetter(latLong[1], latLong[0]);
        weatherUpdater(forecast);
        cityUpdater(searchInput); // Update the city in HTML
    } else {
        alert("Location not found. Please try again.");
    }
};

// MAIN
(async () => {
    const map = createMap("map", [-98.4946, 29.4252]);
    const forecast = await getForecast(29.4252, -98.4946);
    const mapCreator = createMap;
    const forecastGetter = getForecast;
    const weatherUpdater = updateWeatherInfo;
    const cityUpdater = updateCity; // Assign the updateCity function

    updateWeatherInfo(forecast);

    document.getElementById("searchButton").addEventListener("click", () => {
        const searchbarInput = document.getElementById("locationInput").value;
        handleSearch(searchbarInput, mapCreator, forecastGetter, weatherUpdater, cityUpdater);
    });
})();