function numbers(arr) {
    let numberSequence = arr[0].split(" ")
    arr.shift()
    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i].split(" ")
        if (currCommand[0] == "Add") {
            numberSequence.push(currCommand[1])
        }
        else if (currCommand[0] == "Remove") {
            if (numberSequence.includes(currCommand[1])) {
                numberSequence.splice(numberSequence.indexOf(currCommand[1]), 1)
            }
        }
        else if (currCommand[0] == "Replace") {
            if (numberSequence.includes(currCommand[1])) {
                numberSequence[numberSequence.indexOf(currCommand[1])] = currCommand[2]
            }
        }
        else if (currCommand[0] == "Collapse") {
            numberSequence = numberSequence.filter(num => Number(num) >= currCommand[1])
        }
        else if (currCommand[0] == "Finish") {
            let result = numberSequence.join(" ")
            console.log(result)
            return
        }
    }
}

numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Collapse 10",
    "Finish"]
    
    )