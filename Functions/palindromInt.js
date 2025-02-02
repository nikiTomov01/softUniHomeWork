function palindromInt(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        let currNumString = numArr[i].toString();
        if (currNumString === currNumString.split("").reverse().join("")) {
            console.log(true);
        } else {
            console.log(false)
        }
    }
}

palindromInt([32,2,232,1010])