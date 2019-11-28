function encrypt(input, num) {
    input.toUpperCase()
    let result = ''
    let encryptedMsg = ''
    // let resnum = num % 26

    for (let i = 0; i < input.length; i++) {
        var res = (input.charCodeAt(i) - 65 + num) % 26 + 65
        result += String.fromCharCode(res)
    }
    console.log(result)

    for (let str of input) {
        encryptedMsg += String.fromCharCode((str.charCodeAt(0) - 65 + num) % 26 + 65)
    }
    console.log(encryptedMsg)
}

encrypt("STUDENT", 3)
encrypt("XYZ", 3)
encrypt("GOOGLE", 3)

function sum(num) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sum = 0
    for (let number of arr) {
        sum += number
    }
    console.log(sum)
}

function sumodd(num) {
    let arrodd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sumodd = 0
    for (let numberodd of arrodd) {
        if (numberodd % 2 !== 0) {
            sumodd += numberodd
        }
    }
    console.log(sumodd)
}

function sumeven(num) {
    let arreven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sumeven = 0
    for (let numbereven of arreven) {
        if (numbereven % 2 == 0) {
            sumeven += numbereven
        }
    }
    console.log(sumeven)
}

sum()
sumodd()
sumeven()