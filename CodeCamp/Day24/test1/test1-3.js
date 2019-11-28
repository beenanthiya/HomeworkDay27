let array1 = [1, "1", 2, {}]
let array2 = array1.map(x => typeof (x))

console.log(array2)

// array2["number", "string", "number", "object"]