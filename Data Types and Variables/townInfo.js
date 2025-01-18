function townInfo(town, population, area) {
    let exitFunc = false;
    if (town.length < 3) {
        console.log("Town name must be at least 3 characters!");
        exitFunc = true;
    }
    if (population < 0) {
        console.log(`Population must be a positive number!`);
        exitFunc = true;
    }
    if (area < 0) {
        console.log(`Area must be a positive number!`);
        exitFunc = true;
    }
    if (exitFunc == true) {
        return;
    }
    console.log (`Town ${town} has population of ${population} and area ${area} square km.`);
}

townInfo('Ka',

3600,

-50 );