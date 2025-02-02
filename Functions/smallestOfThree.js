function smallestOfThree(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    }
    else if (c < b) {
        console.log(c);
    }
    else {
        console.log(b);
    }
}

smallestOfThree(2, 2, 2);