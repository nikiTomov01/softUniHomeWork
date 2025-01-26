function commonElements(firstArr, secondArr) {
    let commonElems = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                commonElems.push(firstArr[i]);
            }
        }
    }
    for (let i = 0; i < commonElems.length; i++) {
        console.log(commonElems[i]);
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

    ['s', 'o', 'c', 'i', 'a', 'l']);