"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: 'Max' }, { age: 30 });
const mergedObject2 = merge({ name: 'Max', hobbies: ['Sports'] }, 30);
console.log(mergedObject2);
//# sourceMappingURL=app.js.map