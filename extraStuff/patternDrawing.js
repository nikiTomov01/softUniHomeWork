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

            break;
    }
}

patternDrawing("left-triangle", 5);