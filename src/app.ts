// tsconfig.json -> "experimentalDecorators": trueのコメントアウトを外す

function Logger(constructor: Function) {
    console.log('Log出力中...')
    console.log(constructor)
}


@Logger                                             //デコレーター -> クラス定義のタイミングで呼びだされる。インスタンスが作成されるタイミングではない。
class Person {
    name = 'Max'

    constructor(){
        console.log('Personオブジェクトを作成中...')
    }
}

const pers = new Person()

console.log(pers)