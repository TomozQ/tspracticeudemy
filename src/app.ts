// tsconfig.json -> "experimentalDecorators": trueのコメントアウトを外す

// function Logger(constructor: Function) {        // デコレーター関数
//     console.log('Log出力中...')
//     console.log(constructor)
// }

function Logger(logString: string) {        // デコレーターファクトリー
    console.log('Logger factory')
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

//元のクラスを置き換えるデコレーター
function WithTemplate(template: string, hookId: string){
    console.log('TEMPLATE factory')
//                  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――　generic型 originalConstructorの型をTにする
//                  |   ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――　クラス型を定義する必要がある extends {}
//                  |   |       ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――　newキーワードを使ってインスタンスを使えるもの（コンストラクタ関数）であることをTypeScriptに伝える
//                  |   |       |     ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――　new関数は任意の数の引数を受け取る（... -> レストパラメーター、anyの配列）
//                  |   |       |     |                 ―――――――――――――――――――――――――――――――――――――――――――――　返却値はobjectでsring型のnameプロパティを持っている
//                  |   |       |     |                 |
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T){       // 関数を返す
        return class extends originalConstructor {                                      // <- 関数はclassを返す  元のコンストラクター関数を継承している
            constructor(..._: any[]){  // '_' 引数は未使用だが問題ないということをTyepScriptに伝える     // (...args: any[])は新しいコンストラクターの引数にも定義する必要がある。
                                                                                                    // ↑によって新しいコンストラクターの引数を元のコンストラクターに渡すことができる。
                super()                                                                 // 元のクラスのコンストラクターを実行
                console.log('テンプレートを表示')
                const hookEl = document.getElementById(hookId)          
                if(hookEl){
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name     // 上でコンストラクターが動き、インスタンスが作成されているのでthisを使用することができる。
                }
            }
        }
    }
}

// @Logger                                             // デコレーター -> クラス定義のタイミングで呼びだされる。インスタンスが作成されるタイミングではない。
@Logger('ログ出力中 - Person')    
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')     // デコレーターは下から順に実行される　（デコレーター関数が実行される順序） デコレーターファクトリーは通常通り上から実行される
class Person {
    name = 'Max'

    constructor(){
        console.log('Personオブジェクトを作成中...')
    }
}

const pers = new Person()

console.log(pers)


//---

function Log(target: any, propertyname: string | Symbol){
    console.log('Property Decorator')
    console.log(target, propertyname)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Accessor decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Method decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log("Parameter decorator")
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product{
    @Log                        // プロパティデコレーター    クラスのプロパティがクラスの一部としてjavascriptで定義されたとき -> コンストラクターが実行されたとき
    title: string
    private _price: number

    @Log2
    set price(val: number){     // アクセサーデコレーター
        if (val > 0){
            this._price = val
        }else{
            throw new Error('不正な価格です - 0以下は設定できません。')
        }
    }

    constructor(t: string, p: number){
        this.title = t
        this._price = p
    }

    @Log3                                   // メソッドパラメーター
    getPriceWithTax(@Log4 tax: number){     // パラメータデコレーター
        return this._price * (1 + tax)
    }
}

const p1 = new Product('book', 100)
const p2 = new Product('book', 200)

function Autobind(_: any, __: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value                     //showMessageのオブジェクトを取り出す。（関数）
    console.log(originalMethod)
    const adjDescriptor: PropertyDescriptor = {                 //PropertyDescriptor型の定数を定義　　//↓調整済みのdescriptor
        configurable: true,
        enumerable: false,                                      //for _ in のループにこのmethodは表示されなくなる。
        get(){                                                  // Getter  get: function()とも書ける
            const boundFn = originalMethod.bind(this)           //ここに処理を記述することによって、何らかの処理を行った後にvalueを返すことができる。
            return boundFn                       //|
        }                                        //|-------------//デコレーターが所属しているオブジェクトの対象メソッドを参照している。eventListenerによって上書きされない
    }
    console.log('adjDescriptor', adjDescriptor)
    return adjDescriptor                                        //Getter新しいを含んだdescriptorを返す
}

class Printer {
    message = 'クリックしました'

    @Autobind
    showMessage() {
        console.log(this.message)                   // このthisはaddEventListnerされたときは別のobjectを参照している。
    }
}

const p = new Printer()
p.showMessage()                                     // Printerのオブジェクトを参照している。

const button = document.querySelector('button')!
// button.addEventListener('click', p.showMessage)     // addEventListnerにイベントを渡している。　　 イベントの対象となった要素を参照している。（この場合はbutton）
// button.addEventListener('click', p.showMessage.bind(p))     // bindすることで正しい挙動とすることができる。

button.addEventListener('click', p.showMessage)
