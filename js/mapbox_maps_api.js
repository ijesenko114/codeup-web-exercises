import { keys } from "./keys.js";

const favoriteRestaurants = [
    {
        name: "The Barn Door Restaurant & Meat Market",
        address: "8400 N New Braunfels Ave",
    },
    {
        name: "Cappys Restaurant",
        address: "5011 Broadway, San Antonio TX",
    },
    {
        name: "Ida Claire",
        address: "7300 Jones Maltsberger Rd",
    },
];

const createMap = (containerElem, coordinates) => {
    const map = new mapboxgl.Map({
        container: containerElem,
        style: "mapbox://styles/mapbox/navigation-night-v1",
        center: coordinates,
        zoom: 9,
    });
    map.flyTo({
        center: coordinates,
        zoom: 14,
        speed: 2,
    });
    return map;
};

const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};

(async () => {
    mapboxgl.accessToken = keys.mapbox;

    const map = createMap("map", [-98.4652, 29.4917]);

    for ( const restaurant of favoriteRestaurants) {
        const coordinates = await getCoordinates(restaurant.address);
        const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

        const popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(coordinates)
            .setHTML(`<h5>${restaurant.name}</h5>`)
            .addTo(map);

        marker.setPopup(popup);
    }
})();
