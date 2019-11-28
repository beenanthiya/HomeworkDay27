let array1 = [{
        name: "apple",
        birth: "2000-01-01"
    },
    {
        name: "banana",
        birth: "1990-10-10"
    },
    {
        name: "watermelon",
        birth: "1985-12-30"
    },
]

let array2 = array1.map((x) => {
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let dob = new Date(x.birth)
    let date = dob.getDate()
    let mon = months[dob.getMonth()]
    let year = dob.getFullYear()
    let day = date + " " + mon + " " + year
    //console.log(formatted_date)
    return "<tr><td>" + x.name + "</td><td>" + day + "</td><tr >"
})

console.log(array2)

// array2[
// "<tr>
// <td> apple < /td> // <td> 01 jan 2000 < /td> // <tr> ",
// "
//     <
//     tr >
//     <
//     td > banana < /td> <
// td > 10 oct 1990 < /td> < /
// tr > ",
//     // "<tr>
//     <
//     td > watermelon < /td> <
// td > 30 dec 1985 < /td> < /
// tr > ",
// // ]