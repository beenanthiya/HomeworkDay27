//Lab1
// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//     res.send('hello word')
// })

// app.listen(3000)

//Lab2
// var express = require('express')
// var app = express()

// app.use(express.static('./public/'))

// var cat = require('./user/cat')
// app.use('/cat', cat)
// var dog = require('./user/dog')
// app.use('/dog', dog)

// app.listen(3000)

//Lab3
// var express = require('express')
// var app = express()

// app.use(express.static('./public/'))

// app.use('/user', function (req, res) {
//     res.send("404 user not found")
// })

// app.use(function (req, res) {
//     res.send("404 not found")
// })

// app.listen(3000)

//Lab4
// var express = require('express')
// var app = express()

// app.use(express.static('./public/'))

// var userRoute = require('./Lab4')
// app.use('/user', userRoute)

// app.use('/user', function (req, res) {
//     res.send("404 user not found")
// })

// app.use(function (req, res) {
//     res.send("404 not found")
// })

// app.listen(3000)

//Lab4.4
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static('./public/'))

app.use(bodyParser.urlencoded({
    extended: true
}))

var userRoute = require('./Lab4')
app.use('/user', userRoute)

// app.use('/user', function (req, res) {
//     res.send("404 user not found")
// })

// app.use(function (req, res) {
//     res.send("404 not found")
// })

app.listen(3000)