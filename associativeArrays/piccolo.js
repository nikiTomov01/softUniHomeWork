function piccolo(arr) {
    let garage = []
    for (let i = 0; i < arr.length; i++) {
        let comm = arr[i].split(", ")
        let direction = comm[0]
        let carNum = comm[1]
        if (direction === "IN") {
            garage.push(carNum)
        }
        else if (direction === "OUT") {
            garage.splice(garage.indexOf(carNum), 1)
        }
    }
    let sortedGarage = garage.sort()
    if (sortedGarage.length == 0) {
        console.log("Parking Lot is Empty")
    }
    else {
        sortedGarage.forEach((elem) => {
            console.log(elem)
        })
    }
}

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'OUT, CA1234TA'])