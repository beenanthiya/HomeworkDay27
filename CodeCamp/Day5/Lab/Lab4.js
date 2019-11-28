// var express = require('express')
// var router = express.Router()

// router.get('/', function (req, res) {
//     res.send(req.query.id)
// })

// module.exports = router

// var express = require('express')
// var router = express.Router()

// router.get('/:id', function (req, res) {
//     res.send(req.params.id)
// })

// module.exports = router

// var express = require('express')
// var router = express.Router()

// router.get('/add/:a/:b', function (req, res) {
//     var a = parseInt(req.params.a)
//     var b = parseInt(req.params.b)
//     res.send(String(a + b))
// })

// module.exports = router

// var express = require('express')
// var router = express.Router()

// router.post('/add', function (req, res) {
//     var a = parseInt(req.body.a)
//     var b = parseInt(req.body.b)
//     res.send(String(a + b))
// })

// module.exports = router

var express = require('express')
var router = express.Router()

router.post('/mul', function (req, res) {
    var a = parseInt(req.body.a)
    var b = parseInt(req.body.b)
    res.send("<script>alert(" + (a * b) + ");</script>")
})

module.exports = router