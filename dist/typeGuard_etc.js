"use strict";
var _a;
const e1 = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date,
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Hello', 'TypeScript');
result.split('');
const fetchedUserDatta = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'Developer',
        description: 'typescript'
    },
};
console.log((_a = fetchedUserDatta === null || fetchedUserDatta === void 0 ? void 0 : fetchedUserDatta.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=typeGuard_etc.js.map