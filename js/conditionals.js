"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
const analyzeColor = (colorname) => {
    if (colorname === `blue`) {
        return "blue is the color of the sky";
    } else if (colorname === `red`) {
        return "Red is the color of an apple";
    } else if(colorname === `cyan`) {
        return "Cyan is weird";
    } else {
        return " I dont know anything about " + colorname;
    }
}

// const userColor = prompt("what is your favorite color")
// const answer = analyzeColor(userColor)
// console.log(answer)
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// const answer2 = analyzeColor(randomColor)
// console.log(answer2)
// console.log(randomColor)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let userColor = prompt("What king of color do you like?");

// switch(userColor.toLowerCase()) {
//     case "red":
//         console.log("I Love red too");
//         break;
//     case "blue":
//         console.log("I dig it blue is sweet");
//         break;
//     case "green":
//         console.log("Me too green is great");
//         break;
//     case "Yellow":
//         console.log("Classic choice");
//         break;
//     default:
//         console.log("What a werido...");
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let answer3 = analyzeColor(userColor)
// alert(answer3)
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// const calculateTotal = (luckyNumber,totalAmount) => {
//     if(luckyNumber === 0) {
//         return totalAmount;
//     } else if (luckyNumber === 1) {
//         return totalAmount - (totalAmount * .10) ;
//     } else if (luckyNumber === 2){
//         return totalAmount - (totalAmount * .25) ;
//     } else if (luckyNumber === 3){
//         return totalAmount - (totalAmount * .35) ;
//     } else if (luckyNumber === 4){
//         return totalAmount - (totalAmount * .50) ;
//     } else if (luckyNumber === 5){
//         return `0`
//     }
// }
// const custNum= prompt("what is your lucky number?");
// const custTotal=prompt("how much is your total?");
// const total = calculateTotal(custNum,custTotal);
// console.log(total);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// const custTotal=prompt("how much is your total?");
// const custAnswer= calculateTotal(luckyNumber,custTotal)
// alert("Your lucky number is " + luckyNumber)
// alert(`Your price before discount was `+ custTotal)
// alert(`Your price after this discount is ` + custAnswer)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
const wantToEnterNumber = confirm('Would you like to enter a number?');

if (wantToEnterNumber) {
    const userInput = prompt('Please enter a number:');
    const userNumber = parseFloat(userInput);

    if (!isNaN(userNumber)) {
        if (userNumber % 2 === 0) {
            alert('The number is even.');
        } else {
            alert('The number is odd.');
        }

        alert(`The number plus 100 is ${userNumber + 100}`);

        if (userNumber >= 0) {
            alert('The number is positive.');
        } else {
            alert('The number is negative.');
        }
    } else {
        alert('Incorrect input data type. Please enter a valid number.');
    }
}