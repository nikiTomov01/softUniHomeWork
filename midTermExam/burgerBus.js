function burgerBox(arr) {
    let totalProfit = 0
    let numOfCity = arr[0]
    arr.shift()
    for (let i = 1; i <=  numOfCity; i++) {
        let cityName = arr.shift()
        let moneyEarned = Number(arr.shift())
        let expenses = Number(arr.shift())
        if (i % 5 == 0) {
            moneyEarned -= (moneyEarned * 10) / 100
        }
        else if (i % 3 == 0) {
            expenses += (expenses * 50) / 100
        }
        let currProfit = (moneyEarned - expenses)
        totalProfit += currProfit
        console.log(`In ${cityName} Burger Bus earned ${currProfit.toFixed(2)} leva.`)
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

burgerBox(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"]
    
    )