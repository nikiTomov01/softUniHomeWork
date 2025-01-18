function distanceConverter(meters) {
    let kilometers = meters / 1000;
    let miles = (kilometers * 0.621371).toFixed(2);
    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
}

distanceConverter(798)