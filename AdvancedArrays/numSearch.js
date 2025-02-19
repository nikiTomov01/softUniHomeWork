function numSearch(numbers, commands) {
    let toTake = commands[0]
    let toRemove = commands[1]
    let toFind = commands[2]
    let afterComm = []
    let foundCount = 0
    for (let i = 0; i < toTake; i++) {
        afterComm.push(numbers[i])
    }
    for (let i = 0; i < toRemove; i++) {
        afterComm.shift()
    }
    for (let i = 0; i < afterComm.length; i++) {
        if (afterComm[i] === toFind) {
            foundCount++
        }
    }
    console.log(`Number ${toFind} occurs ${foundCount} times.`)
}

numSearch([7, 1, 5, 8, 2, 7],

    [3, 1, 5])