const os = require('os')//подключение модулей
//Модуль OS позваляет данные пользователя и его компьютера
const platform = os.platform()

console.log(`Current platform: ${platform}`)