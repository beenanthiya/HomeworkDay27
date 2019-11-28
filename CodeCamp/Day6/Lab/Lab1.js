//Quiz

let num = 5216

if (num % 2 === 0) {
    console.log("Quiz 1 : " + num + " เป็นจำนวนคู่")
} else {
    console.log("Quiz 1 : " + num + " เป็นจำนวนคี่")
}

//Challenge1

let num2 = "1AF3"
let res = parseInt(num2, 16)

if (res % 2 === 0) {
    console.log("Challenge 1 : " + num2 + " เลขฐาน 10 คือ " + res + " เป็นจำนวนคู่")
} else {
    console.log("Challenge 1 : " + num2 + " เลขฐาน 10 คือ " + res + " เป็นจำนวนคี่")
}

//Challenge2

let num3 = "1233388899000000009999"
let res2 = parseInt(num3)

if (res2 % 2 === 0) {
    console.log("Challenge 2 : " + num3 + " เป็นจำนวนคู่ " + res2)
} else {
    console.log("Challenge 2 : " + num3 + " เป็นจำนวนคี่ " + res2)
}