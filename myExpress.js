// npm i express
// npm i ejs
const express = require('express')//импорт Express JS

const app = express()//создаение сервера
app.set('view engine', "ejs")//добавление ШАБЛОНИЗАТОРА на сервер

app.get('/', (request, response) => {//получение главной страницы
    // response.send('This is Main page using Express JS')      ----------      to send text
    // response.sendFile(__dirname + '/templates/index.html')   ----------      to load basic html page
    response.render("index")                                //  ----------      to render EJS page
})

// app.get('/about', (request, response) => {
//     // response.send("This is About page using Express JS")
//     response.sendFile(__dirname + "/templates/about.html")               -------------   sending data with basic HTML code without EJS
// })
// app.get('/user/:username/:id', (request, response) => {//using PARAMS
//     response.send(`ID: ${request.params.id} UserName: ${request.params.username}`)
// })

app.get('/about', (request, response) => {
    response.render('about')
})
app.get("/user/:userName/:id", (request, response) => {
    const hobbies = ['football', 'basketball', "skiing"]
    response.render('user', {userName: request.params.userName, id: request.params.id, hobbies})
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Serever has started: http://localhost:${PORT}` )
})