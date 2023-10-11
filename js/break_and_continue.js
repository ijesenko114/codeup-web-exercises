let userNumber;
while (true) {
    let userInput = prompt("Please enter an odd number between 1 and 50:");
    userNumber = parseInt(userInput);

    if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
        break;
    } else {
        alert("Invalid input. Please enter a valid odd number between 1 and 50.");
    }
}


for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 || i === userNumber) {
        continue;
    }
    console.log(i);
}