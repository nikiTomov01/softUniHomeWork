function oddOccurance(words) {
    let odds = []
    let arr = words.split(" ")
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let counter = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].toLowerCase() == arr[j].toLowerCase()) {
                counter++
            }
        }
        if (counter % 2 != 0) {
            odds.push(arr[i].toLowerCase())
        }
    }
    let result = [... new Set(odds)]
    console.log(result.join(" "))
}

oddOccurance("Cake IS SWEET is Soft CAKE sweet Food")