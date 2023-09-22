const readlineSync = require("readline-sync");
const themesF = require("./WRsync");
const themes = themesF();
const themeTitle = ["Цитаты из игр", "Алкоголь", "Фобии"];
let counter = 0;
let userName = readlineSync.question("Как тебя зовут?\n");

//  Tema 1
let index = readlineSync.keyInSelect(
  themeTitle,
  `Привет ${userName}, выбери тему`
);
let answer = readlineSync.question(`${themes[index][0].question}\n\n`);

if (themes[index][0].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][0].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][1].question}\n\n`);

if (themes[index][1].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][1].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][2].question}\n\n`);

if (themes[index][2].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][2].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][3].question}\n\n`);

if (themes[index][3].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][3].answer.toLowerCase()}\n`
  );
}
answer = readlineSync.question(`${themes[index][4].question}\n\n`);

if (themes[index][4].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][4].answer.toLowerCase()}\n`
  );
}

// Tema 2
index = readlineSync.keyInSelect(themeTitle, "Выбери следующую тему");

answer = readlineSync.question(`${themes[index][0].question}\n\n`);

if (themes[index][0].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][0].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][1].question}\n\n`);

if (themes[index][1].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][1].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][2].question}\n\n`);

if (themes[index][2].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][2].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][3].question}\n\n`);

if (themes[index][3].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][3].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][4].question}\n\n`);

if (themes[index][4].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][4].answer.toLowerCase()}\n`
  );
}
// Tema 3
index = readlineSync.keyInSelect(themeTitle, "Выбери следующую тему");

answer = readlineSync.question(`${themes[index][0].question}\n\n`);

if (themes[index][0].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][0].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][1].question}\n\n`);

if (themes[index][1].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][1].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][2].question}\n\n`);

if (themes[index][2].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][2].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][3].question}\n\n`);

if (themes[index][3].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][3].answer.toLowerCase()}\n`
  );
}

answer = readlineSync.question(`${themes[index][4].question}\n\n`);

if (themes[index][4].answer.toLowerCase() === answer.toLowerCase()) {
  counter++;
  console.log(`\nПравильно, твой счет: ${counter}\n`);
} else {
  counter--;
  console.log(
    `\nНеравильно, правильный ответ: ${themes[index][4].answer.toLowerCase()}\n`
  );
}
if (counter < 0) {
  ("С вас пять тыщ");
}
console.log(`\n\n\n${userName}, твой результат: ${+counter}\n\n\n`);
