// tsconfig.json -> "experimentalDecorators": trueのコメントアウトを外す

// function Logger(constructor: Function) {        //デコレーター関数
//     console.log('Log出力中...')
//     console.log(constructor)
// }

function Logger(logString: string) {        //デコレーターファクトリー
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}


// @Logger                                             //デコレーター -> クラス定義のタイミングで呼びだされる。インスタンスが作成されるタイミングではない。
@Logger('ログ出力中 - Person')                          
class Person {
    name = 'Max'

    constructor(){
        console.log('Personオブジェクトを作成中...')
    }
}

const pers = new Person()

console.log(pers)