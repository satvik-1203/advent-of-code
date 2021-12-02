import fs from "fs";

const data = fs.readFileSync("dayTwo.txt", "utf-8").split("\n");

let forward = 0;
let depth = 0;
let aim = 0;

data.forEach((el) => {
  const [cmd, number] = el.split(" ");

  switch (cmd) {
    case "forward":
      forward += +number;
      depth += aim * +number;
      break;

    case "down":
      aim += +number;
      break;

    case "up":
      aim -= +number;
      break;
  }
});

console.log(forward * depth);
