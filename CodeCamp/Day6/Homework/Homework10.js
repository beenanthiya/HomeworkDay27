function doSwap(str) {
    let result = [1, 0, 0]
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'A') {
            swapA(result);
        } else if (str.charAt(i) === 'B') {
            swapB(result);
        } else {
            swapC(result);
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 1) {
            return i + 1;
        }
    }
}
console.log(doSwap('AB'));
console.log(doSwap('CBABCACCC'));

function swapA(x) {
    let arr = x;
    let temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
    return arr;
}

function swapB(x) {
    let arr = x;
    let temp = arr[2];
    arr[2] = arr[1];
    arr[1] = temp;
    return arr;
}

function swapC(x) {
    let arr = x;
    let temp = arr[2];
    arr[2] = arr[0];
    arr[0] = temp;
    return arr;
}