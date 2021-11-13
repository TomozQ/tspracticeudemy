"use strict";
const add = (a, b) => a + b;
const printOutput = output => {
    console.log(output);
};
printOutput(add(2, 5));
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', e => {
        console.log(e);
    });
}
//# sourceMappingURL=app.js.map