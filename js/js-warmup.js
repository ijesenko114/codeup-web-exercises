
const findLargestNumber = (arr) => {
    if (arr.length === 0) {
        return "The array is empty";
    }
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};

(() => {

    const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];

    const result = findLargestNumber(numbers);
    console.log(result);
})();