function gladExpenses(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpense = 0;
    let swordBreaks = 0;
    let helmBreaks = 0;
    let shieldBreaks = 0;
    let armorBreaks = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            shieldBreaks++;
            swordBreaks++;
            helmBreaks++;
            if (shieldBreaks % 2 == 0) {
                armorBreaks++;
            }
            continue;
        }

        if (i % 2 == 0) {
            helmBreaks++;
            continue;
        }

        if (i % 3 == 0) {
            swordBreaks++;
            continue;
        }
    }

    totalExpense += ((swordBreaks * swordPrice) + (shieldBreaks * shieldPrice) + (helmBreaks * helmPrice) + (armorBreaks * armorPrice));
    console.log(`Gladiator expenses: ${totalExpense.toFixed(2)} aureus`);
}

gladExpenses(7,

    2,
    
    3,
    
    4,
    
    5)