function nxnMatrix(n) {
    let matrix = [];
    let currRow = [];
    for (let i = 0; i < n; i++) {
        currRow = [];
        for (let j = 0; j < n; j++) {
            currRow.push(n);
        }
        matrix.push(currRow);
    }
    for (let i = 0; i < n; i++){
        console.log(matrix[i].join(" "))
    }
}

nxnMatrix(2);