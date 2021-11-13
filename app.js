var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true){}
}
var result = generateError('エラーが発生しました。', 500);
console.log(result);
