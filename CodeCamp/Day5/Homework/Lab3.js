//Lab3
var express = require('express')
var app = express()

app.get('/echo', function (req, res) {
    res.send(req.query.text)
})

app.listen(3000)