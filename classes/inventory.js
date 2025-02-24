function inventory(arr) {
    let heroes = []
    for (let i = 0; i < arr.length; i++) {
        let currComms = arr[i].split(" / ")
        heroes.push({
            name: currComms[0],
            level: Number(currComms[1]),
            items: currComms[2].split(", ")
        })
    }
    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.join(", ")}`)
    })
}

inventory([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ])