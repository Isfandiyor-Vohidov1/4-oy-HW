function SeakElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(SeakElement([10, 20, 30, 40, 50], 30));
console.log(SeakElement([10, 20, 30, 40, 50], 60));
