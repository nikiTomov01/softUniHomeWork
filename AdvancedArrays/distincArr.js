function distinct(arr) {
    let tempArr = arr
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = i + 1; j < tempArr.length; j++) {
            if (tempArr[i] == tempArr[j]) {
                tempArr.splice(j, 1)
            }
        }
    }
    console.log(tempArr.join(" "))
}

distinct([1,2,3,4])