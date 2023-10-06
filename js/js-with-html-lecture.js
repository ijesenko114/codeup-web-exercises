//console.log("testing");

//let x = 1


// short hand operators
// x = x + 1;
// x += 1;
// x+= 2;

//x/=1;
//x = x / 1;

// Unary Operators
//let y = 5;
//y++;
// written out
//y = y + 1

// y--;


//console.log(y);

// method to turn number into string
// let pi = 3.14
// console.log(pi);
// let piString = pi.toString();

// from a string to a number
// let nmrOfStudents = "19.37";
// nmrOfStudents = parseInt(nmrOfStudents); // this is a js function
// nmrOfStudents = parseFloat(nmrOfStudents);

// let bankAccount = "19.23656";
// bankAccount = parseFloat(bankAccount);
// bankAccount = parseInt(bankAccount);
// console.log(bankAccount);

// let x = "griffin";
// let xNumber = Number(x);
// console.log(xNumber);
//
// let isEqual = xNumber === NaN; // cant do it this way
// console.log("NaN strict comparison => ", isEqual);
// let isReallyEqual = isNaN(xNumber);
// console.log("isNaN Function => " , isReallyEqual);
//
// /// truthy/falsey
//
// let emptyString = "" == false;
// console.log("emptyString => " , emptyString);
// let zero = 0 == false;
// console.log(noValue);
// let NoValue;
// console.log("zero => ", zero);
// let noData = null;
//
// if(noData) {
//     console.log("YUP, IT'S TRUTHY");
// }


// STRING METHODS
//
// let username = "Justino(Nova)";
// let guildName;
//
// let nameLength = username.length;
// console.log("nameLength => " , nameLength);
// let guildNameStart = username.indexOf("(");
// console.log("guildNameStart => ", guildNameStart);
// let guildNameEnd = nameLength - 1;
// guildName = username.substring(guildNameStart + 1 ,guildNameEnd );
// console.log("guildName =>", guildName);
// username = username.replace("(" + guildName + ")", "")


/// Functions

// const sayHello = (usersFullName) => {
// //     console.log(`Hello, ${usersFullName}`);
// // };
// //
// // sayHello("Ian")
//
// // arrow function with return
//
//
// const isCoding = (usersfullname, greeting, regards) => {
//     return`${usersfullname} ${greeting} ${regards}`;
// };
//
// const name = "Ian";
// const lovesCoding = "Loves Coding";
// const goodBye = "Have a good day";
// const greeting = isCoding(name,lovesCoding,goodBye);
// console.log(greeting);

// default vales
// const sayHello = (usersfullName = "no username") =>


// conditionals
// const username = "jesenkoi";
//
// if(username) {
//     console.log("The user is logged in!");
// } else {
//     console.log("The user is not logged in");
// }
//
//
// console.log("THIS IS AFTER THE CONDIONAL STATEMENT!");

// const nmrOfUsers = 1000;
//
// if (nmrOfUsers >= 10000) {
//     console.log("Thats too many users");
// } else if (nmrOfUsers >= 200) {
//     console.log("Thats alot of users")
// } else {
//     console.log("Marketing needs to do a better job!");
// }

// const userRole = "admin";
//
// if(userRole === "student"){
//     console.log("Let the see the curriculum");
// } else if (userRole === "admin"){
//     console.log("let them see the curriculum and the instructor portal");
// } else{
//     console.log("Dont let them login");
// };

// const isTwo = (number) => {
//     if(typeof number !== "number") {
//         return false;
//     }
//
//     let result = number === 2;
//     return result;
// };
//
// const number= 1

// const calculateTip = (tipPercantage,billTotal) => {
//    if(){
//
//    }
//     let tipDecimal = parseFloat(tipPercantage)/100;
//     let result = parseFloat(billTotal) * parseFloat(tipPercantage);
//     return result;
// }
//
//
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT")

//Ternary Operator

// const isLoggedIn = false;
//
// // let message;
// // if(isLoggedIn) {
// //     let message = "Welcome back";
// // } else {
// //     let message = "Please Log In";
// // }
//
// let message = isLoggedIn ? "Welcome back!" : "Please Log in"
//
// console.log(message);

// Switch statemnts
let pizzaPreference = prompt("What king of pizza do you like?");

switch(pizzaPreference.toLowerCase()) {
    case "cheese":
        console.log("I Love Cheese too");
        break;
    case "hawaiian":
        console.log("I dig it sweet and salty");
        break;
    case "supreme":
        console.log("Me too why choose when you can have everything");
        break;
    case "Perperoni":
        console.log("Classic choice");
        break;
    default:
        console.log("What a werido...");
        break;
}