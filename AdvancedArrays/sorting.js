function sorting(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    let loopCounter = 1
    while(arr.length) {
        if (loopCounter % 2 == 0) {
            result.push(arr.shift())
        }
        else {
            result.push(arr.pop())
        }
        loopCounter++
    }
    console.log(result.join(" "))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])