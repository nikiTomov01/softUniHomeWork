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

            break;
        case "reverse-pyramid":
            
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

patternDrawing("long-square", 5);