function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num: number): void { //void...return命令を持たない、何も返さない
    console.log('Result' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => (void)){
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result)
    return result
})

let combineValues: (a: number, b: number) => number //関数であることと、引数と戻り値の型を定義　function型

combineValues = add
// combineValues = printResult
// combineValues = 5

console.log(combineValues(8, 8))

printResult(add(5,12))