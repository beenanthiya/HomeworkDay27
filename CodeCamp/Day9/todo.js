const express = require('express')
const app = express()

let todoList = []

app.get('/getTodoList', (req, res) => {
    res.send(todoList)
})

app.listen(3000, () => {
    console.log('server is running.')
})