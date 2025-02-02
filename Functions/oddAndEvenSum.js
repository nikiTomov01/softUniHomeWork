function oddAndEvenSum(num) {
    let numString = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numString.length; i++) {
        let currNum = Number(numString[i]);
        if (currNum % 2 == 0) {
            evenSum += currNum;
        }
        else {
            oddSum += currNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);