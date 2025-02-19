function houseParty(comms) {
    let list = [];
    for (let i = 0; i < comms.length; i++) {
        let currComm = comms[i].split(" ")
        let name = currComm[0]
        if (currComm.length == 3) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`)
            }
            else {
                list.push(name)
            }
        }
        else {
            if (list.includes(name)) {
                list.splice(list.indexOf(name), 1)
            }
            else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
}

houseParty(['Tom is going!',

    'Annie is going!',
    
    'Tom is going!',
    
    'Garry is going!',
    
    'Jerry is going!'])