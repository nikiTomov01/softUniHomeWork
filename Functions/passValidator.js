function passValidator(pass) {
    let lenCheck = (pass.length < 6 || pass.length > 10)
    let letterAndDigitCheck = !(/^[A-Za-z0-9]*$/.test(pass));
    let digitCountCheck = (pass.match(/\d/g) || []).length < 2;
    if (lenCheck) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (letterAndDigitCheck) {
        console.log("Password must consist only of letters and digits");
    }
    if (digitCountCheck) {
        console.log("Password must have at least 2 digits");
    }
    if (!lenCheck && !letterAndDigitCheck && !digitCountCheck) {
        console.log("Password is valid");
    }
}

passValidator("myPass123")