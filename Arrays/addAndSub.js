function addAndSub(arr) {
    let sumOld = 0;
    let sumNew = 0;
    let newArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (newArr[i] % 2 == 0) {
            newArr[i] += i;
        }
        else {
            newArr[i] -= i;
        }
        sumOld += arr[i];
        sumNew += newArr[i];
    }
    console.log(newArr);
    console.log(sumOld);
    console.log(sumNew);
}

addAndSub([5, 15, 23, 56, 35]);