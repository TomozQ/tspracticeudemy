// tsconfig.json -> "experimentalDecorators": trueのコメントアウトを外す

// function Logger(constructor: Function) {        //デコレーター関数
//     console.log('Log出力中...')
//     console.log(constructor)
// }

function Logger(logString: string) {        //デコレーターファクトリー
    console.log('Logger factory')
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
    // return function(_: Function){  //引数を'_'にすることによって必要だが使用しないという意味合いになる　引数としては書いておく必要がある。
    console.log('TEMPLATE factory')

    return function(constructor: any){                          //Personクラスのconstructorを引数に取る
        console.log('テンプレートを表示')
        const hookEl = document.getElementById(hookId)          //要素を取得
        const p = new constructor()                             //インスタンスを作成
        if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

// @Logger                                             //デコレーター -> クラス定義のタイミングで呼びだされる。インスタンスが作成されるタイミングではない。
@Logger('ログ出力中 - Person')    
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')     //デコレーターは下から順に実行される　（デコレーター関数が実行される順序） デコレーターファクトリーは通常通り上から実行される
class Person {
    name = 'Max'

    constructor(){
        console.log('Personオブジェクトを作成中...')
    }
}

const pers = new Person()

console.log(pers)