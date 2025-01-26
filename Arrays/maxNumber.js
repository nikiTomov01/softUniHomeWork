function maxNumber(arr) {
    let topInts = [];
    let foundTop = true;
    for (let i = 0; i < arr.length; i++) {
        foundTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                foundTop = false;
            }
        }
        if (foundTop == true) {
            topInts.push(arr[i]);
        }
    }
    console.log(topInts.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);