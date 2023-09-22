const readlineSync = require("readline-sync");
const themesF = require("./WRsync");
const themes = themesF();
const themeTitle = ["theme1", "theme2", "theme3"];
let index = readlineSync.keyInSelect(themeTitle, "Выберите тему");

console.log(themes[index][3].question);
