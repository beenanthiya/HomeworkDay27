//Lab7-9
var express = require('express')
var app = express()

app.get('/checkEvenNumber/:a', function (req, res) {
    let num = parseInt(req.params.a)
    if (num % 2 === 0) {
        res.status(200).send('Success')
    } else {
        res.status(400).send('Bad Input')
    }
})

app.listen(3000)