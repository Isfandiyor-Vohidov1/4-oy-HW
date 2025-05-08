function diapElement(arr, min, max) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

console.log(diapElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7));
