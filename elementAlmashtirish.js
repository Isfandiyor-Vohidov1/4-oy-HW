function ElementChange(arr, index1, index2) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }

    let temp = newArr[index1];
    newArr[index1] = newArr[index2];
    newArr[index2] = temp;

    return newArr;
}

console.log(ElementChange([1, 2, 3, 4, 5], 1, 3));
