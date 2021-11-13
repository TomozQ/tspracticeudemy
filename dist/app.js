"use strict";
const add = (a, b = 1) => a + b;
const printOutput = output => {
    console.log(output);
};
printOutput(add(2));
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
//# sourceMappingURL=app.js.map