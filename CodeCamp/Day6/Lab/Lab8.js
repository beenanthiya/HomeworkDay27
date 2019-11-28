let a = [2, 3, 8, 6]
let b = 7
let res = true

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if ((a[i] + a[j]) == b) {
            res = true
            console.log(res)
        } else {
            res = false
        }
    }
}