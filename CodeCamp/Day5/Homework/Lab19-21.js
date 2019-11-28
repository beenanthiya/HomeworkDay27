var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.post('/countFields', function (req, res) {
    let a = req.body
    res.send(String(Object.keys(a).length))
})

app.listen(3000)