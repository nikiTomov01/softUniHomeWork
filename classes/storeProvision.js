function store(currStock, orderedStock) {
    let stockObj = {};
    for (let i = 0; i < currStock.length; i++) {
        if (i % 2 == 0) {
            let tempStock = currStock[i];
            stockObj[tempStock] = Number(currStock[i + 1])
        }
    }
    for (let i = 0; i < orderedStock.length; i += 2) {
        let tempStockName = orderedStock[i]
        let stockExists = false
        for (let key of Object.keys(stockObj)) {
            if (key == tempStockName && stockExists == false) {
                stockObj[key] = stockObj[key] + Number(orderedStock[i + 1])
                stockExists = true
            }
        }
        if (!stockExists) {
            stockObj[tempStockName] = Number(orderedStock[i + 1])
        }
    }
    for (let key of Object.keys(stockObj)) {
        console.log(`${key} -> ${stockObj[key]}`)
    }
}

store([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])