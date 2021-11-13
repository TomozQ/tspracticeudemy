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

const hobbies = ['sports', 'cokking']
// console.log(hobbies[0])
const activeHobbies = ['hiking', ...hobbies] //スプレッド演算子
// activeHobbies.push(...hobbies)

console.log(activeHobbies)

const person = {
    name: 'max',
    age: 30
}

// const copiedPerson = person  //参照のコピー

const copiedPerson = { //オブジェクトのコピー
    ...person,
}

console.log(copiedPerson)