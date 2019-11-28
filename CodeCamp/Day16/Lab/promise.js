// let promise = new Promise(function (resolve, reject) {
//     // setTimeout(() => resolve("done"), 1000)
//     // setTimeout(() => reject(new Error("Error!")), 1000)
//     let answer = true
//     if (answer == true) {
//         resolve("Complete")
//     } else if (answer == false) {
//         reject("Error")
//     }
// })

// promise.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

/////--------------------------//////
let setTimeoutAndLog = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(input)
            resolve(input)
        }, 1000)
    })
}

// setTimeoutAndLog("a")
//     .then(setTimeoutAndLog("b"))
//     .then(setTimeoutAndLog("c"))
//     .then(setTimeoutAndLog("d"))

setTimeoutAndLog("a").then(result => {
    setTimeoutAndLog("b").then(result => {
        setTimeoutAndLog("c").then(result => {
            setTimeoutAndLog("d").then(result => {

            })
        })
    })
})