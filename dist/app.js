"use strict";
var _a;
var e1 = {
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
var result = add('Hello', 'TypeScript');
result.split('');
var fetchedUserDatta = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'Developer',
        description: 'typescript'
    },
};
console.log((_a = fetchedUserDatta === null || fetchedUserDatta === void 0 ? void 0 : fetchedUserDatta.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map