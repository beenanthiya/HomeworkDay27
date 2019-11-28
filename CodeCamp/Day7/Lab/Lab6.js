function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));

//ans
function gcd(a, b) {
    if (b == 0) return a
    return gcd(b, a % b)
}

console.log(gcd(12, 13))
console.log(gcd(9, 3))