// Вначале импортируем библотеку http или https
const http = require('http')
const fs = require('fs')

// потом созлаем сервер
// куда передаем йункцию Call-Back, котоая принимает request и response
// дадее указываем в заголвке код (200 = успех), тип данных загружаемых на сервер и способ кодировки
// {'Content-Type': "text/plain; charset=utf-8"} - ДЛЯ ТЕКСТА 
// {'Content-Type': "text/html; charset=utf-8"} - ДЛЯ HTML СТРАНИЦЫ
// в полследнюю очередь сам контент, который будет на сайте 
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': "text/html; charset=utf-8"})
    // response.end(String) - так лечше не писать
    // response.end("Hello <b>Node JS</b>")

    if(request.url === "/"){
        // Сначала мы считывыем все данные с index.html
        // тут createStreamRead ипользует ПОТОКОВЫЙ подход
        // то есть он не дожидается пока весь файл будет считан, а отправляет частями
        // .pipe(response) - когда видид, что пришла новая порция, загружает ее
        const stream = fs.createReadStream('./templates/index.html')
        stream.pipe(response)
    }else if(request.url === "/about"){
        const stream = fs.createReadStream('./templates/about.html')
        stream.pipe(response)
    }else{
        const stream = fs.createReadStream('./templates/error.html')
        stream.pipe(response)
    }
})


// создаем Хост и Порт
const PORT = 3000
const HOST = 'localhost'

// запускаем сервер
server.listen(PORT, HOST, () => {
    console.log(`Server has been deployed: http://${HOST}:${PORT}`)
})