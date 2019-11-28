var express = require('express')
var bodyParser = require('body-parser')
var app = express()

let list = []

app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/number/:a', function (req, res) {
    list.push(req.params.a)
    res.send(list)
})

app.delete('/number/:a', function (req, res) {
    let index = list.indexOf(req.params.a)
    if (index > -1) {
        list.splice(index, 1)
    }
    res.send(list)
})

app.put('/number/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    for (i = 0; i <= list.length; i++) {
        if (list[i] == a) {
            list[i] = b
        }
    }
    res.send(list)
})

app.listen(3000)