function cal(str) {
    let num = parseInt(str)

    function circle(num) {
        var res = (Math.PI * Math.pow(num, 2)).toFixed(6)
        console.log(res)
    }
    circle(num)

    function taxi(num) {
        var res2 = (2 * Math.pow(num, 2)).toFixed(6)
        console.log(res2)
    }
    taxi(num)
}

cal(1)
cal(21)
cal(42)