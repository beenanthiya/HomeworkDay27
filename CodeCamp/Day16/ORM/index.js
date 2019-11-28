const express = require('express')
const db = require('./models')
const boatService = require('./services/boat')
const sailor = require('./services/sailor')
const reserve = require('./services/reserve')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

db.sequelize.sync({
    force: false
}).then(() => {
    boatService(app, db)
    sailor(app, db)
    reserve(app, db)
    app.listen(8080, () => console.log("Server is running"))
})