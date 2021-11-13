function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues; //関数であることと、引数と戻り値の型を定義　function型
combineValues = add;
// combineValues = printResult
// combineValues = 5
console.log(combineValues(8, 8));
printResult(add(5, 12));
