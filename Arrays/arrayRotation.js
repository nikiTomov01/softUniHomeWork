function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let tempNum = arr[0];
        arr.shift()
        arr.push(tempNum);
    }
    console.log(arr.join(" "));
}

arrayRotation([32, 21, 61, 1], 4);