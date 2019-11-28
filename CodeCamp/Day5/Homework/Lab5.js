//Lab5
var express = require('express')
var app = express()

// app.get('/plusByJSON', function (req, res) {
//     let q_json = req.query.jsonText
//     let obj = JSON.parse(q_json)
//     res.send(String(obj.a + obj.b))
// })

app.get('/plusByJSON', function (req, res) {
    let json = req.query.jsonText
    var str = json.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
        return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
    });
    let obj = JSON.parse(str)
    let a = parseInt(obj.a)
    let b = parseInt(obj.b)
    res.send(String(a + b))
})

app.listen(3000)