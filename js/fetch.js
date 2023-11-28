import { keys } from "./keys.js";

const username = "ijesenko114";
const url = `https://api.github.com/users/${username}`;
const options = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${keys.github}`,
    },
};

fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .then((userData) => {
        const lastCommitDate = userData.updated_at;
        console.log(`The last commit date for ${username} is ${lastCommitDate}`);
    })