type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable, resultConversion: "as-number" | "as-text") {
  let res;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
}

const combineNum = combine(10, 88, "as-number");
console.log(combineNum);

const combineStr = combine("haha", " funny", "as-text");
console.log(combineStr);

const combineNumStr = combine("10", "88", "as-number");
console.log(combineNumStr);
