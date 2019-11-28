let array1 = [{
        name: "apple",
        birth: "2001-01-01"
    },
    {
        name: "banana",
        birth: "1990-10-10"
    },
    {
        name: "watermelon",
        birth: "1985-12-30"
    },
    {
        name: "peach",
        birth: "2002-10-13"
    },
]
// array2[{
//     name: "banana",
//     birth: "1990-10-10"
// }, {
//     name: "peach",
//     birth: "2002-10-13"
// }, ] // filter คนเกิดเดือน 10

let array2 = array1.filter((x) => {
    let dob = new Date(x.birth)
    let mon = dob.getMonth()
    return mon == 09
})

console.log(array2)