var express = require('express')
var app = express()

app.get('/bye', function (req, res) {
    res.send('Good bye')
})

app.listen(5555)