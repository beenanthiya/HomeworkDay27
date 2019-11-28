let input = [3, 5, 4, 2, 1]
let sum = 0
let max = 0
let f = 0

for (let i = 0; i < input.length; i++) {

    if (max < input[i]) {
        max = input[i]
        f = i + 1
    }
    sum += input[i]
}

console.log(sum + "," + max + "," + f)
console.log("ผลลัพธ์ คือ " + sum + " ค่าที่มากที่สุด คือ " + max + " อยู่ตำแหน่งที่ " + f)