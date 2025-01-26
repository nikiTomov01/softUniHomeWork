function maxSequence(arr) {
    let streak = 0;
    let currElem = 0;
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        let tempStreak = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tempStreak++;
            }
            else {
                break;
            }
        }
        if (tempStreak > streak) {
            answer = [];
            streak = tempStreak;
            currElem = arr[i];
            for (let i = 0; i < streak; i++) {
                answer.push(currElem);
            }
        }
    }
    console.log(answer.join(" "));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);