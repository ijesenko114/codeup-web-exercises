let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let jsBirthday = new Date(2003,5,2);
console.log(jsBirthday);

const month = months[jsBirthday.getMonth()];
const day = jsBirthday.getDay();
const year = jsBirthday.getFullYear();
const formatedDate = `${month} ${day}, ${year}`;
console.log(formatedDate);