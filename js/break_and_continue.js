while (true) {
    let userInput = prompt("Please enter an odd number between 1 and 50:");

    let number = parseInt(userInput);

    if (!isNaN(number) && number >= 1 && number <= 50 && number % 2 !== 0) {

        console.log("You entered a valid odd number.");
        break;
    } else {

        alert("Invalid input. Please enter a valid odd number between 1 and 50.");
    }
}
