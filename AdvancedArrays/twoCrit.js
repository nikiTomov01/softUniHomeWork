function twoCrit(arr) {
    let result = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}

twoCrit(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])