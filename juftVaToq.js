function J_and_V(arr) {
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i] % 2) {
            case 0:
                console.log("J: " + arr[i]);
                break;
            case 1:
            case -1:
                console.log("T: " + arr[i]);
                break;
        }
    }
}

J_and_V([1, 2, 3, 4, 5, 6]);
