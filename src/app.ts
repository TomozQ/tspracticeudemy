// const names: any[] = []

//generic型
// const names: Array<string | number> = [] 
// const names: Array<string> = [] //string[]
// names[0].split(' ')

// const promise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })

// promise.then(data => {
//     data.split(' ')
// })


//generic function
// function merge<T, U>(objA: {name: string}, objB: {age: number}){  //オブジェクトには何が入ってくるかわからない状況で、このように型を限定したくない
function merge<T, U>(objA: T, objB: U){  //交差型を返す　//T/Uはどんな型でも良い。TとUが同じ型でもよい。（2つの異なる型を受け取ることを定義している。TypeScriptはこれを推論する。）
    return Object.assign(objA, objB)
}

const mergedObject = merge({name: 'Max'}, {age: 30})
// const mergedObject2 = merge<string, number>({name: 'Max', hobbies: ['Sports']}, {age: 30}) //呼び出し時に型を定義することができる。この場合は1つ目がstring、2つ目がnumber
// const mergedObject2 = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Max', hobbies: ['Sports']}, {age: 30}) //呼び出し時に型を定義することはできるがこの書き方は冗長

const mergedObject2 = merge({name: 'Max', hobbies: ['Sports']}, 30) //呼び出し時に型を定義することはできるがこの書き方は冗長
console.log(mergedObject2)