import { keys } from "../../keys.js";

const getPokemon = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
const getLocations = (url) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
};
const getCompletePokemon = async (id) => {
    try {
        const pokemon = await getPokemon(id);
        const locations = await getLocations(pokemon.location_area_encounters);
        pokemon.location_area_encounters = locations;
        return pokemon;
    } catch (error) {
        console.log(error);
    }
};
// MAIN
(async () => {
    // const pokemon = await getCompletePokemon("charmander");
    // console.log(pokemon);
    // getPokemon("charmander").then((pokemon) => {
    // 	console.log(pokemon);
    // });
    const url = "https://api.github.com/users/merrellj-codeup";
    const options = {
        method: "GET",
        headers: {
            Authorization: `token ${keys.github}`,
        },
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
})();