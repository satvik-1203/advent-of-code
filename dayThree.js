import fs from "fs";

const dataArr = fs.readFileSync("dayThree.txt", "utf-8").split("\n");

class Position {
  zero = 0;
  one = 0;
}

const recurArr = [];

let gamma = "";
let epsilon = "";

for (let i = 0; i < 12; i++) {
  recurArr.push(new Position());
}

dataArr.forEach((data) => {
  data.split("").forEach((ch, index) => {
    if (ch == "1") recurArr[index].one++;
    else recurArr[index].zero++;
  });
});

recurArr.forEach((recur) => {
  if (recur.one > recur.zero) {
    gamma += "1";
    epsilon += "0";
  } else {
    gamma += "0";
    epsilon += "1";
  }
});

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
