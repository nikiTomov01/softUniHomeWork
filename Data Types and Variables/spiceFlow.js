function spiceFlow(initSpice) {
    let daysMined = 0;
    let currSpice = initSpice;
    let minedSpice = 0;
    while(currSpice >= 100) {
        daysMined++;
        minedSpice += currSpice;
        if (minedSpice > 26) {
            minedSpice -= 26;
        }
        else {
            minedSpice = 0;
        }
        currSpice -= 10;
    }
    if (minedSpice > 26) {
        minedSpice -= 26;
    }
    else {
        minedSpice = 0;
    }
    console.log(daysMined);
    console.log(minedSpice);
}

spiceFlow(450);