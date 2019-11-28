let array1 = [1, 3, 4, 5, 6, 7, 8]
let array2 = array1.map((x) => {
    if (x % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
})

console.log(array2)

//array2["odd", "odd", "even", "odd", "even", "odd", "even"]