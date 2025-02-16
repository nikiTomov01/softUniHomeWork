function deckOfCards(arr) {
    let deck = arr[0].split(",").map(str => str.trim())
    arr.shift()

    let numOfCommands = arr[0]
    arr.shift()
    for (let i = 0; i < numOfCommands; i++) {
        let currCommand = arr[i].split(",").map(str => str.trim())
        let command = currCommand[0]
        if (command === "Add") {
            if (!(deck.includes(currCommand[1]))) {
                deck.push(currCommand[1])
                console.log("Card successfully added")
            }
            else {
                console.log("Card is already in the deck")
            }
        }
        else if (command === "Remove") {
            let cardToR = currCommand[1]
            if ((deck.includes(cardToR))) {
                deck.splice(deck.indexOf(cardToR), 1)
                console.log("Card successfully removed")
            }
            else {
                console.log("Card not found")
            }
        }
        else if (command === "Remove At") {
            let cardIndex = currCommand[1]
            if (cardIndex < 0 || cardIndex > deck.length) {
                console.log("Index out of range")
            }
            else {
                deck.splice(cardIndex, 1)
                console.log("Card successfully removed")
            }
        }
        else if (command === "Insert") {
            let cardIndex = currCommand[1]
            let cardToAdd = currCommand[2]
            if (cardIndex < 0 || cardIndex > deck.length) {
                console.log("Index out of range")
            }
            else {
                if (deck.includes(cardToAdd)) {
                    console.log("Card is already added")
                }
                else {
                    deck.splice(cardIndex, 0, cardToAdd)
                    console.log("Card successfully added")
                }
            }
        }
    }
    console.log(deck.join(", "))
}

deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"]
    
    )