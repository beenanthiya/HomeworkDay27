let num = 3

for (let i = num; i >= 2; i--) {
    if (num % i == 0) {
        console.log("It isn't Prime Number")
    } else {
        console.log("It is Prime Number")
    }
}

let number = prompt("Insert a number")
let count = 0
number = parseInt(number)

if (number === 0 || number === 1) {
    console.log("Not a prime number")
} else {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            count = count + 1;
        }
    }

    if (count >= 3) {
        console.log("Not a prime number")
    } else {
        console.log("Prime number")
    }
}