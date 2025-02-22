function towns(towns) {
    let townList = [];
    for(let i = 0; i < towns.length; i++) {
        let currTown = towns[i].split(" | ")
        const tempObj = {};
        tempObj.town = currTown[0]
        tempObj.latitude = Number(currTown[1]).toFixed(2)
        tempObj.longitude = Number(currTown[2]).toFixed(2)
        townList.push(tempObj)
    }
    for (elem in townList) {
        console.log(townList[elem])
    }
}

towns(['Plovdiv | 136.45 | 812.575'])