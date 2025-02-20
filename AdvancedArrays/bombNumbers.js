function bombNumbers(arr, comms) {
    let bomber = comms[0]
    let bombTime = comms[1]
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(bomber)) {
            arr.splice(arr.indexOf(bomber) - bombTime, bombTime)
            arr.splice(arr.indexOf(bomber), bombTime + 1)
            
        }
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    console.log(result)

}

bombNumbers([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])