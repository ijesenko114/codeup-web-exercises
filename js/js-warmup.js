
// const findLargestNumber = (arr) => {
//     if (arr.length === 0) {
//         return "The array is empty";
//     }
//     let largest = arr[0];
//
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// };
//
// (() => {
//
//     const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
//
//     const result = findLargestNumber(numbers);
//     console.log(result);
// })();

// Function to calculate the average grade of the students
// const calculateAverageGrade = (studentList) => {
//     let sum = 0;
//     for (let student of studentList) {
//         sum += student.grade;
//     }
//     let classAverage = sum / studentList.length
//
//
//
//     return classAverage;
// };
//
// // Function to find the student with the highest grade
// const findTopStudent = (studentList) => {
//     let topStudent;
//     studentList.forEach(student => {
//         if (!topStudent || student.grade > topStudent.grade) {
//             topStudent = student;
//         }
//     });
//     return topStudent;
// };
//
// //IIFE / Main
// (() => {
//     // Array of student objects
//     const students = [
//         { id: 1, name: "Alice", grade: 90 },
//         { id: 2, name: "Bob", grade: 85 },
//         { id: 3, name: "Charlie", grade: 78 },
//         { id: 4, name: "David", grade: 92 },
//         { id: 5, name: "Eva", grade: 88 },
//     ];
//     // Display the average grade and the top student
//     const averageGrade = calculateAverageGrade(students);
//     const topStudent = findTopStudent(students);
//
//     console.log(`Average Grade: ${averageGrade}`);
//     console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
// })();


// const findLongestWord = (sentence) => {
//     const words = sentence.split(" ");
//     let longestWord = "";
//
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//
//     return longestWord;
// }
//
// console.log(findLongestWord("The Quick brown fox jumped over the lazy dog "));


