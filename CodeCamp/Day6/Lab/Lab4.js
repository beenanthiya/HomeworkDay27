let num = 5
let sum = 0

if (num >= 0) {
    let res = (((1 + num) * num) / 2)
    console.log(res)
} else {
    console.log("Wrong Number")
}

//loop
if (num >= 0) {
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    console.log(sum)
} else {
    console.log("Wrong Number")
}

while (num > 0) {
    sum += num
    num = num--
}
console.log(sum)