let array1 = [{
        name: "apple",
        age: 14
    },
    {
        name: "banana",
        age: 18
    },
    {
        name: "watermelon",
        age: 32
    },
]

let array2 = array1.map(x => x.name)

console.log(array2)
//array2["apple", "banana", "watermelon"]