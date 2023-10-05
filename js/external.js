// console.log("Hello from inline JavaScript");
// alert(`welcome to my website`);
// let userChoice = prompt(`What is your favorite color?`)
// alert(`Great, ${userChoice} is my favorite color too!`)

// let mermaidChoice = prompt(`How many days did you keep "The Little Mermaid"?`);
// let herculesChoice = prompt( `How many days did you keep "Hercules"?`);
// let bearChoice = prompt(`How many days did you keep "Brother Bear"?`);
// let ppdChoice = prompt(`How much was each movie per day?`);
// let totalDays = parseFloat(mermaidChoice) + parseFloat(herculesChoice) + parseFloat(bearChoice)
// let totalPrice = totalDays * parseFloat(ppdChoice)
// alert(`Your total cost is $${totalPrice}`)

let googleChoice1 = prompt(`How much does google pay you per hour?`);
let googleChoice2 = prompt(`How many hours did you work for google this week?`);
let amazonChoice1 = prompt(`How much does amazon pay you per hour?`);
let amazonChoice2 = prompt(`How many hours did you work for amazon this week`);
let facebookChoice1 = prompt(`How much does facebook pay you per hour?`);
let facebookChoice2 = prompt(`How many hours did you work for facebook this week?`);
let googleTotal = parseFloat(googleChoice1) * parseFloat(googleChoice2);
let amazonTotal = parseFloat(amazonChoice1) * parseFloat(amazonChoice2);
let facebookTotal = parseFloat(facebookChoice1) * parseFloat(facebookChoice2);
let fullTotal = googleTotal + amazonTotal + facebookTotal;
let fullTotalUS= fullTotal.toLocaleString("en-US", {style:"currency", currency:"USD"});
alert(`Your total earnings this week are ${fullTotalUS}`)