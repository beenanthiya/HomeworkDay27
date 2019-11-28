let arr = [5, 1, 2, 3, 4, 5]
let min = arr[0]
let max = arr[0]


for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    } else if (max < arr[i]) {
        max = arr[i]
    }

}

console.log("Min is " + min + " Max is " + max)