// Этот модуль позваоляет работать с файлами
// прицип работы с файлами на сервере и локальными одинаков
const { error } = require('console')
const fs = require('fs')
// fs - stands for FileSystem


//          1)РАБОТА С ФАЙЛАМИ
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


// обычно лучше использовать ASYNCH функции
//          2)РАБОТА С ПАПКАМИ
fs.mkdir('someFolderAsynch', () => {//создаение папки
    console.log("New folder someFolderAsynch has been created...")
    fs.writeFile("./someFolderAsynch/someTextInsideFolderAsynch.txt", "Hello World", (error, data) => {//созданеи .txt файла внутри папки
        console.log("New file someTextInsideFolderAsynch.txt has been created...")
    })
})


//      3)УДАЛЕНИЕ ФАЙЛОВ И ПАПОК

fs.mkdir('folderToDelete', () => {//создаение папки
    fs.writeFile("./folderToDelete/fileToDelete.txt", "Hello World", (error, data) => {//созданеи .txt файла внутри папки
        // ЧТОБЫ УДАЛИТЬ ПАПКУ НАЖО СНАЧАЛА УДАЛИТЬ ВСЕ ЕЕ СОДЕРЖИМОЕ
        // И ТОЛЬКО ПОТОМ САМУ ПАПКУ
        fs.unlink("./folderToDelete/fileToDelete.txt", (error, data) => {//УДАЛЯЕМ СОДЕРЖИМОЕ
            console.log("File fileToDelete.txt has created and been deleted...")
            fs.rmdir("folderToDelete", (error, data) => {
                console.log("Folder folderToDelete has been created and deleted...")
            })
        })
    })
})