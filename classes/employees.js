function employees(arr) {
    let objList = []
    for (elem in arr) {
        const tempEmp = {}
        tempEmp.name = arr[elem]
        tempEmp.id = arr[elem].length;
        objList.push(tempEmp)
    }
    for (elem in objList) {
        console.log(`Name: ${objList[elem].name} -- Personal Number: ${objList[elem].id}`)
    }
}

employees([

    'Samuel Jackson',
    
    'Will Smith',
    
    'Bruce Willis',
    
    'Tom Holland'
    
    ])