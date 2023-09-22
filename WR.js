// const fs = require("fs").promises;
// const QuizCard = require("./QuizCard");
// const readlineSync = require("readline-sync");
// const animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"];
// let ind = readlineSync.keyInSelect(animals, "Which animal?");
// console.log("Ok, " + animals[ind] + " goes to your room.");
// const themes = ["Первая тема: ТЕКС", "Вторая тема"];

// const themeOne = [];
// fs.readFile("./topics/nighthawk_flashcard_data.txt", "utf-8")
//   .then((text) => {
//     const textArr = [];
//     text
//       .trim()
//       .split("\n\n")
//       .forEach((el) => textArr.push(el.split("\n")));
//     return textArr;
//   })
//   .then((data) => {
//     const resultArr = [];
//     for (let i = 0; i < data.length; i += 1) {
//       resultArr.push(new QuizCard(data[i][0], data[i][1]));
//     }
//     themeOne.push(resultArr);
//   });

// console.log(themeOne);
