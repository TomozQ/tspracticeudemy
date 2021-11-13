// const useerName = 'Max'
// // userName = 'Maximilian'
// let age = 30

// age = 29

// function add(a: number, b: number){
//     let result
//     result = a+b
//     return result
// }

// if (age >= 20){
//     let isAdult = true
// }

// console.log(isAdult)

//const, letはブロック内でしか使用できないようになっている（varはアクセスできる）

const add = (a: number, b: number = 1) =>  a+b  //デフォルト値は右側のパラメータにしか設定できない

const printOutput: (output: string | number) => void = output => {
    console.log(output)
}


printOutput(add(2))

const button = document.querySelector('button')

if (button){
    button.addEventListener('click', e => {
        console.log(e)
    })
}