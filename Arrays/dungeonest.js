function dungeon(sRooms) {
    let rooms = sRooms.split("|");
    let health = 100;
    let coins = 0;
    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(" ");
        let currEvent = currentRoom[0];
        let currAction = currentRoom[1];
        if (currEvent === "potion") {
            if (health + Number(currAction) > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            else {
                console.log(`You healed for ${currAction} hp.`);
                health += Number(currAction);
            }
            console.log(`Current health: ${health} hp.`);
        }
        else if (currEvent === "chest") {
            coins += Number(currAction);
            console.log(`You found ${currAction} coins.`)
        }
        else {
            health -= Number(currAction);
            if (health > 0) {
                console.log(`You slayed ${currEvent}.`);
            }
            else {
                console.log(`You died! Killed by ${currEvent}.`)
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeon("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");