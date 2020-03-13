function combine(input1, input2, resultConversion) {
    var res;
    if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
var combineNum = combine(10, 88, "as-number");
console.log(combineNum);
var combineStr = combine("haha", " funny", "as-text");
console.log(combineStr);
var combineNumStr = combine("10", "88", "as-number");
console.log(combineNumStr);
