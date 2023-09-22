const readlineSync = require("readline-sync");
const themesF = require("./WRsync");
const themes = themesF();
const themeTitle = ["theme1", "theme2", "theme3"];
let index = readlineSync.keyInSelect(themeTitle, "Выберите тему");

// console.log(themes[index][3].question);
//  Tema 1
let answer = readlineSync.question(`${themes[index][0].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

answer = readlineSync.question(`${themes[index][1].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

answer = readlineSync.question(`${themes[index][2].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

// Tema 2
index = readlineSync.keyInSelect(themeTitle, "Выберите тему");

answer = readlineSync.question(`${themes[index][0].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

answer = readlineSync.question(`${themes[index][1].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

answer = readlineSync.question(`${themes[index][2].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

// Tema 3
index = readlineSync.keyInSelect(themeTitle, "Выберите тему");

answer = readlineSync.question(`${themes[index][0].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

answer = readlineSync.question(`${themes[index][1].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");

answer = readlineSync.question(`${themes[index][2].question}\n\n`);

themes[index][0].answer === answer
  ? console.log("\nПравильно\n")
  : console.log("\nНеправильно\n");
