const fs = require("fs");
const QuizCard = require("./QuizCard");
function themesF() {
  const themes = [];
  const textArr1 = [];
  const textArr2 = [];
  const textArr3 = [];

  fs.readFileSync("./topics/tema1.txt", "utf-8")
    .trim()
    .split("\n\n")
    .forEach((el) => textArr1.push(el.split("\n")));
  const themeOneArr = [];
  for (let i = 0; i < textArr1.length; i += 1) {
    themeOneArr.push(new QuizCard(textArr1[i][0], textArr1[i][1]));
  }
  themes.push(themeOneArr);

  fs.readFileSync("./topics/tema2.txt", "utf-8")
    .trim()
    .split("\n\n")
    .forEach((el) => textArr2.push(el.split("\n")));
  const themeTwoArr = [];
  for (let i = 0; i < textArr2.length; i += 1) {
    themeTwoArr.push(new QuizCard(textArr2[i][0], textArr2[i][1]));
  }
  themes.push(themeTwoArr);

  fs.readFileSync("./topics/tema3.txt", "utf-8")
    .trim()
    .split("\n\n")
    .forEach((el) => textArr3.push(el.split("\n")));
  const themeThreeArr = [];
  for (let i = 0; i < textArr3.length; i += 1) {
    themeThreeArr.push(new QuizCard(textArr3[i][0], textArr3[i][1]));
  }
  themes.push(themeThreeArr);
  return themes;
}

module.exports = themesF;
