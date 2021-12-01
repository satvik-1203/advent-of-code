import fs from "fs";

const data = fs.readFileSync("dayOne.txt", "utf-8");
const dataArr = data.split("\n");
const newData = [];

const slidingWindowFn = (newData, dataArr) => {
  let leftPointer = 0;
  let rightPointer = 3;

  while (rightPointer < dataArr.length) {
    let sum = 0;
    for (let i = leftPointer; i < rightPointer; i++) sum += +dataArr[i];

    newData.push(sum);
    leftPointer++;
    rightPointer++;
  }
};

const fn = (dataArr) => {
  let larger = 0;
  for (let i = 1; i < dataArr.length; i++)
    if (+dataArr[i] > +dataArr[i - 1]) larger++;

  return larger;
};

slidingWindowFn(newData, dataArr);
console.log(fn(newData));
