//Lab2
var express = require('express')
var app = express()

app.get('/staticJSON', function (req, res) {
    res.json({
        "text": "Hello World"
    })
})

app.listen(3000)