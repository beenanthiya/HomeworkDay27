let array1 = [{
        name: "apple",
        birth: "2000-01-01"
    },
    {
        name: "banana",
        birth: "1990-10-01"
    },
    {
        name: "watermelon",
        birth: "1985-12-01"
    },
]

let array2 = array1.map((x) => {

    var today = new Date();
    var birthDate = new Date(x.birth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return {
        name: x.name,
        birth: x.birth,
        age: age
    }
})

console.log(array2)

// array2[{
//     name: "apple",
//     birth: "2000-01-01",
//     age: 19
// }, {
//     name: "banana",
//     birth: "1990-10-01",
//     age: 29
// }, {
//     name: "watermelon",
//     birth: "1985-12-01",
//     age: 33
// }, ]