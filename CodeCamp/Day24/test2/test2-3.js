let array1 = [1, "1", 2, {}, 0]
let array2 = array1.filter(x => typeof (x) == "number")

console.log(array2)
//array2[1, 2] // filter Number