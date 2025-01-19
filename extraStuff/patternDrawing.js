function patternDrawing(figure) {
    let figureString = "";
    switch(figure) {
        case "right-triangle":
            for (let i = 0; i < 5; i++) {
                figureString += "*";
                console.log(figureString);
            }
            break;
        case "long-square":

            break;
        case "diamond":

            break;
        case "left-triangle":
            
            break;
        case "pyramid":

            break;
        case "reverse-pyramid":
            
            break;
        case "rectangle":

            break;
    }
}

patternDrawing("right-triangle");