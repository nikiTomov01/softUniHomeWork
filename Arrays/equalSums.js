function equalSums(arr) {
    let answer = "no";
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let left = i - 1; left >= 0; left--) {
            leftSum += arr[left];
        }
        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }
        if (leftSum === rightSum) {
            answer = i;
        }
    }
    console.log(answer);
}

equalSums([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4]);