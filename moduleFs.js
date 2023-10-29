// Этот модуль позваоляет работать с файлами
// прицип работы с файлами на сервере и локальными одинаков
const { error } = require('console')
const fs = require('fs')
// fs - stands for FileSystem

if(fs.existsSync('someTextSync.txt')){
    const data = fs.readFileSync('someTextSync.txt', "utf-8")
    console.log("Text in someTextSync.txt: " + data)
}else{
    fs.writeFileSync("someTextSync.txt", "Hello World")
    console.log("New SYNCH file has been created...")
    const data = fs.readFileSync('someTextSync.txt', "utf-8")
    console.log("Text in someTextSync.txt: " + data)
}

// Synch - ознячает синхронность
// То есть код не пойдет дальше пока файл не у=будет записан или прочитан

if(fs.existsSync("someTextAsynch.txt")){
    const data = fs.readFile('someTextAsynch.txt', "utf-8", (error, data) => {
        console.log("Text in ASYNC .txt file: " + data)
    })
}else{
    fs.writeFile("someTextAsynch.txt", "Hellow World", (error, data) => {
        console.log("New ASYNCH file has been created...")
        fs.readFile("someTextAsynch.txt", "utf-8", (error, data) => {
            console.log("Text in file ASYNCH .txt file" + data)
        })
    })
}