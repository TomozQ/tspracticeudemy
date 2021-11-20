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
function merge<T extends object, U extends object>(objA: T, objB: U){   //extends 型　とすることでどんな型でもよいがobjectになってないとならないという制約をつける
    return Object.assign(objA, objB)　// object.assignを呼びだしている為この場合は引数がobjectでなくてはならない
}

const mergedObject = merge({name: 'Max', hobbies: ['Sports']}, {age: 30}) //呼び出し時に型を定義することはできるがこの書き方は冗長
console.log(mergedObject)


//another generic function
interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = '値がありません'
    if(element.length > 0){
        descriptionText = `値は${element.length}個です`
    }
    return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', 'Cooking']))