//Lab6
var express = require('express')
var app = express()

app.get('/plus/:a/:b', function (req, res) {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    res.send(String(a + b))
})

app.listen(3000)