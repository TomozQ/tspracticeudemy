function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num: number): void { //void...return命令を持たない、何も返さない
    console.log('Result' + num)
}

printResult(add(5,12))