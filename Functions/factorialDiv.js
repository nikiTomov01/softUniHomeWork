function factorialDiv(numOne, numTwo) {
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }
        else {
            return num * factorial(num - 1);
        }
    }
    let factorialOne = factorial(numOne);
    let factorialTwo = factorial(numTwo);
    console.log((factorialOne / factorialTwo).toFixed(2));
}

factorialDiv(6, 2);