const express = require('express')
const res = require('express/lib/response')

const app = express()


app.get('/', (request, response) => {
    response.send('This is Main page using Express JS')
})

app.get('/about', (request, response) => {
    response.send("This is About page using Express JS")
})


app.get('/user/:username/:id', (request, response) => {
    response.send(`ID: ${request.params.id} UserName: ${request.params.username}`)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Serever has started: http://localhost:${PORT}` )
})