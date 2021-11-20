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

//keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){  //objectにkeyがあることを保証する 
    return `Value + ${obj[key]}`
}

extractAndConvert({name: 'Max'}, 'name')


//generic class

class DataStorage<T extends string | number | boolean> {    //Tを←のようなユニオン型にすることで、objectを使用できないように制限する。
                                                            // （objectはobject用のgenericが必要になる場合が多い）
    private data: T[] = []

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return 
        }
        this.data.splice(this.data.indexOf(item), 1)    //indexOfは見つからない場合は -1 を返す。 -1 -> 最後の要素
                                                        //JavaScriptのオブジェクトは参照型のため、
                                                        //objStorage.addItem({name: 'Max'})
                                                        //objStorage.removeItem({name: 'Max'})
                                                        //として{name: 'Max'}は同じものに見えるが、実際は違う。
                                                        //objectを渡されるとindexOfで要素が見つからない為、-1が返され、最後の{name: 'Manu'}が削除される。
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('data1')
textStorage.addItem('data2')
textStorage.removeItem('data1')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// const obj = {name: 'Max'}  //オブジェクトではremoveItemが正しく動作しないため、一旦定数に格納しプリミティブ型として処理をする。
// objStorage.addItem(obj)
// objStorage.addItem({name: 'Manu'})
// // ...
// objStorage.removeItem(obj)
// console.log(objStorage.getItems())