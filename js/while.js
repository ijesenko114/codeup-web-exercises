
// let number = 2;
// while (number <= 65536) {
//     console.log(number);
//     number *= 2;
// }

let allCones = Math.floor(Math.random() * 50) + 50;

do {
   let custCones = Math.floor(Math.random() * 5) + 1;
   if (custCones <= allCones) {
       console.log(custCones + " cones sold");
       allCones -= custCones;
   } else
       console.log("Cannot sell you " + custCones + " cones, I only have " + allCones)

} while (allCones > 0);

console.log("Yay I sold them all");