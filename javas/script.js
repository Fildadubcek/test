function getMultiplication(min = 1, max = 10) {
    let results = [];
    for (let x = min; x <= max; x++) {
        for (let y = min; y <= max; y++) {
            results.push(`${x} * ${y} = ${x * y}`);
        }
    }
    return results;
}

// Volání funkce a výpis výsledků do konzole
const multiplicationTable = getMultiplication();
multiplicationTable.forEach(result => console.log(result));