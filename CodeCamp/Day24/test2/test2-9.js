let array1 = ["peach", 1, -3, "2", {},
    []
]
//array2["peach", "2"] // filter string
let array2 = array1.filter(x => typeof (x) == "string")

console.log(array2)