import fs from "fs";

// Code is ugly and repetitive and i dont care :)

let dataArr = fs.readFileSync("dayThree.txt", "utf-8").split("\n");

function oxygen(dataArr, index) {
  let one = 0;
  let zero = 0;

  dataArr.forEach((data) => {
    if (data[index] == "1") one++;
    else zero++;
  });

  if (one >= zero) dataArr = dataArr.filter((data) => data[index] == "1");
  else dataArr = dataArr.filter((data) => data[index] == "0");

  return dataArr;
}

let oxygenArr = [...dataArr];

for (let i = 0; i < 12; i++) {
  oxygenArr = oxygen(oxygenArr, i);

  if (oxygenArr.length == 1) break;
}

function carbon(dataArr, index) {
  let one = 0;
  let zero = 0;

  dataArr.forEach((data) => {
    if (data[index] == "1") one++;
    else zero++;
  });

  if (one >= zero) dataArr = dataArr.filter((data) => data[index] == "0");
  else dataArr = dataArr.filter((data) => data[index] == "1");

  return dataArr;
}

let carbonArr = [...dataArr];

for (let i = 0; i < 12; i++) {
  carbonArr = carbon(carbonArr, i);

  if (carbonArr.length == 1) break;
}

console.log(parseInt(oxygenArr[0], 2) * parseInt(carbonArr[0], 2));
