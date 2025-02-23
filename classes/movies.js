function weirdMovies(arr) {
    let moviesObj = [];
    for (let i = 0; i < arr.length; i++) {
        let currComm = arr[i].split(" ")
        if (currComm[0] === "addMovie") {
            currComm.shift()
            let movie = currComm.join(" ")
            moviesObj.push({
                name: movie
            })
        }
        else {
            if (currComm.includes("directedBy")) {
                let directorList = []

                let whileCount = currComm.length - 1
                while(whileCount > currComm.indexOf("directedBy")) {
                    directorList.push(currComm.pop())
                    whileCount--
                }
                currComm.pop()

                let selectedMovie = currComm.join(" ")
                let directorName = directorList.reverse().join(" ")

                for (let key of Object.keys(moviesObj)) {
                    if (moviesObj[key].name === selectedMovie) {
                        moviesObj[key].director = directorName
                        break;
                    }
                }
            }
            else if (currComm.includes("onDate")) {
                let movieDate = currComm.pop()
                currComm.pop()
                let selectedMovie = currComm.join(" ")
                
                for (let key of Object.keys(moviesObj)) {
                    if (moviesObj[key].name === selectedMovie) {
                        moviesObj[key].date = movieDate
                        break;
                    }
                }
            }
        }
    }
    let jsonString = JSON.stringify(moviesObj, null, 0)
    jsonString = jsonString.slice(1, -1).trim()
    
    for (let i = 0; i < moviesObj.length; i++) {
        if (Object.keys(moviesObj[i]).length == 3) {
            console.log(JSON.stringify(moviesObj[i], null, 0))
        }
    }
}

function movies(arr) {
    let moviesObj = {};
    for (let i = 0; i < arr.length; i++) {
        let currComm = arr[i].split(" ")
        if (currComm[0] === "addMovie") {
            currComm.shift()
            let movie = currComm.join(" ")
            moviesObj[movie] = {}
        }
        else {
            for (let j = 0; j < currComm.length; j++) {
                if (currComm.includes("directedBy")) {
                    let directorList = []

                    let whileCount = currComm.length - 1
                    while (whileCount > currComm.indexOf("directedBy")) {
                        directorList.push(currComm.pop())
                        whileCount--
                    }
                    currComm.pop()

                    let selectedMovie = currComm.join(" ")
                    let directorName = directorList.reverse().join(" ")

                    for (let key of Object.keys(moviesObj)) {
                        if (key === selectedMovie) {
                            moviesObj[key].director = directorName
                            break
                        }
                    }
                    break;
                }
                else if (currComm.includes("onDate")) {
                    let movieDate = currComm.pop()
                    currComm.pop()
                    let selectedMovie = currComm.join(" ")
                    
                    for (let key of Object.keys(moviesObj)) {
                        if (key === selectedMovie) {
                            moviesObj[key].date = movieDate
                            break
                        }
                    }
                    break;
                }
            }
        }
    }
    console.log(JSON.stringify(moviesObj, null, 2))
}

weirdMovies([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])



