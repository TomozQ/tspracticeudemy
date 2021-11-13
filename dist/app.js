"use strict";
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', e => {
        console.log(e);
    });
}
const hobbies = ['sports', 'cokking'];
const activeHobbies = ['hiking', ...hobbies];
console.log(activeHobbies);
const person = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map