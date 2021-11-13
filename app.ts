let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'

if(typeof userInput === 'string'){
    userName = userInput
}

function generateError(message: string, code: number): never{  //絶対にありえない　絶対に戻り値がない 確実にコードがクラッシュする
    throw { message: message, errorCode: code }
    // while (true){}
}

const result = generateError('エラーが発生しました。', 500)
console.log(result)