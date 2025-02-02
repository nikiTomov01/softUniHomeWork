function loadingBar(load) {
    let bar = ["["]
    for (let i = 10; i <= 100; i += 10) {
        if (i <= load) {
            bar.push("%");
        }
        else {
            bar.push(".");
        }
    }
    bar.push("]");
    if (load === 100) {
        console.log("100% Complete!");
        console.log(`${bar.join("")}`);
    }
    else {
        console.log(`${load}% ${bar.join("")}`);
        console.log("Still loading...")
    }
}

loadingBar(30);