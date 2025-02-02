function charInRange(firstChar, secondChar) {
    let firstCharNum = firstChar.charCodeAt(0);
    let secondCharNum = secondChar.charCodeAt(0);
    let answer = [];
    if (firstCharNum > secondCharNum) {
        for (let i = firstCharNum - 1; i > secondCharNum; i--) {
            answer.push(String.fromCharCode(i));
        }
    }
    else {
        for (let i = secondCharNum - 1; i > firstCharNum; i--) {
            answer.push(String.fromCharCode(i));
        }
    }
    console.log(answer.slice().reverse().join(" "));
}

charInRange('C', '#');