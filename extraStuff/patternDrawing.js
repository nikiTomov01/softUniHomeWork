function patternDrawing(figure, rows) {
    let figureString = "";
    switch(figure) {
        case "right-triangle":
            for (let i = 0; i < rows; i++) {
                figureString += "*";
                console.log(figureString);
            }
            break;
        case "long-square":
            for (let i = 0; i < rows; i++) {
                if (i == 0 || i == rows - 1) {
                    figureString = "*****";
                    console.log(figureString);
                    continue;
                }
                console.log("*   *");
            }
            break;
        case "diamond":

            break;
        case "left-triangle":
            for (let i = rows; i > 0; i--) {
                for (let j = 0; j < i; j++) {
                    figureString += "*";
                }
                console.log(figureString);
                figureString = "";
            }
            console.log(figureString);
            break;
        case "pyramid":
            for (let i = 1; i <= rows; i++) {
                let spaces = " ".repeat(rows - i);
                let stars = "*".repeat(2 * i - 1);
                console.log(spaces + stars);
            }
            break;
        case "reverse-pyramid":
            for (let i = rows; i >= 1; i--) {
                let spaces = " ".repeat(rows - i);
                let stars = "*".repeat(2 * i - 1);
                console.log(spaces + stars);
            }
            break;
        case "rectangle":
            for (let i = 0; i < rows; i++) {
                if (i == 0 || i == (rows - 1)) {
                    figureString = "********";
                    console.log(figureString);
                    continue;
                }
                console.log("*      *");
            }
            break;
    }
}

patternDrawing("reverse-pyramid", 5);