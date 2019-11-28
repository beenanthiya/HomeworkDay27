//Lab4
var express = require('express')
var app = express()

app.get('/plus', function (req, res) {
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.send(String(a + b))
})

app.listen(3000)