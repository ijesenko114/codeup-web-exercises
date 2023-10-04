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


STRING METHODS

let username = "Justino(Nova)";
let guildName;

let nameLength = username.length;
console.log("nameLength => " , nameLength);
let guildNameStart = username.indexOf("(");
console.log("guildNameStart => ", guildNameStart);
let guildNameEnd = nameLength - 1;
guildName = username.substring(guildNameStart + 1 ,guildNameEnd );
console.log("guildName =>", guildName);
username = username.replace("(" + guildName + ")", "")
