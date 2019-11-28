let arr = [25, 25, 30]
let grad = 0

if (arr[0] == 0 || arr[0] <= 30 && arr[1] == 0 || arr[1] <= 30 && arr[2] == 0 || arr[2] <= 40) {
    for (let i = 0; i < arr.length; i++) {
        grad += arr[i]
    }
    if (grad >= 80 && grad <= 100) {
        console.log("A")
    } else if (grad >= 75 && grad <= 79) {
        console.log("B+")
    } else if (grad >= 70 && grad <= 74) {
        console.log("B")
    } else if (grad >= 65 && grad <= 69) {
        console.log("C+")
    } else if (grad >= 60 && grad <= 65) {
        console.log("C")
    } else if (grad >= 55 && grad <= 59) {
        console.log("D+")
    } else if (grad >= 50 && grad <= 55) {
        console.log("D")
    } else if (grad >= 0 && grad <= 49) {
        console.log("F")
    }
} else {
    console.log("Wrong Score")
}