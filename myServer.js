// Вначале импортируем библотеку http или https
const http = require('http')

// потом созлаем сервер
// куда передаем йункцию Call-Back, котоая принимает request и response
// дадее указываем в заголвке код (200 = успех), тип данных загружаемых на сервер и способ кодировки
// {'Content-Type': "text/plain; charset=utf-8"} - ДЛЯ ТЕКСТА 
// {'Content-Type': "text/html; charset=utf-8"} - ДЛЯ HTML СТРАНИЦЫ
// в полследнюю очередь сам контент, который будет на сайте 
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': "text/html; charset=utf-8"})
    response.end("Hello <b>Node JS</b>")
})


// создаем Хост и Порт
const PORT = 3000
const HOST = 'localhost'

// запускаем сервер
server.listen(PORT, HOST, () => {
    console.log(`Server has been deployed: http://${HOST}:${PORT}`)
})