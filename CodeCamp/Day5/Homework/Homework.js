var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// ข้อ 1

app.get('/static', function (req, res) {
    res.send('Hello World')
})


// ข้อ 2

// var express = require('express')
// var app = express()

app.get('/staticJSON', function (req, res) {
    res.json({
        "text": "Hello World"
    })
})

// ข้อ 3

// var express = require('express')
// var app = express()

app.get('/echo', function (req, res) {
    res.send(req.query.text)
})

// ข้อ 4

// var express = require('express')
// var app = express()

app.get('/plus', function (req, res) {
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.send(String(a + b))
})

// ข้อ 5

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

// ข้อ 6

// var express = require('express')
// var app = express()

app.get('/plus/:a/:b', function (req, res) {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    res.send(String(a + b))
})

// ข้อ 7-9

// var express = require('express')
// var app = express()

app.get('/checkEvenNumber/:a', function (req, res) {
    let num = parseInt(req.params.a)
    if (num % 2 === 0) {
        res.status(200).send('Success')
    } else {
        res.status(400).send('Bad Input')
    }
})

// ข้อ 10-18

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

// ข้อ 19-21

app.use(bodyParser.json())

app.post('/countFields', function (req, res) {
    let a = req.body
    res.send(String(Object.keys(a).length))
})

//

app.listen(3000)