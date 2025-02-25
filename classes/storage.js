function storage(arr) {
    let dict = {}
    for(let i = 0; i < arr.length; i++) {
        currJson = JSON.parse(arr[i])
        let currKey = Object.keys(currJson)[0]
        dict[currKey] = currJson[currKey]
    }
    
    let sortedDict = Object.keys(dict).sort()

    sortedDict.forEach(key => {
        console.log(`Term: ${key} => Definition: ${dict[key]}`)
    })
}

storage([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"A ground seeds (coffee beans) of a tropical shrub."}'
])