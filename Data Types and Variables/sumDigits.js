function x(num) {
    stringNum = String(num);
    let result = 0;
    for (let i = 0; i < stringNum.length; i++) {
        let tempNum = Number(stringNum[i]);
        result += tempNum;
    }
    console.log(result);
}

x(543);