"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObject);
function countAndDescribe(element) {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = `値は${element.length}個です`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return `Value + ${obj[key]}`;
}
extractAndConvert({ name: 'Max' }, 'name');
//# sourceMappingURL=app.js.map