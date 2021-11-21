"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registerdValidators = {};
function Required(target, propName) {
    var _a, _b;
    console.log('Required target', target);
    console.log('Required propName', propName);
    console.log('registerdValidators', registerdValidators);
    registerdValidators[target.constructor.name] = Object.assign(Object.assign({}, registerdValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registerdValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
    console.log('registerdValidators', registerdValidators);
    console.log(Object.assign({}, registerdValidators[target.constructor.name]));
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registerdValidators[target.constructor.name] = Object.assign(Object.assign({}, registerdValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registerdValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
    console.log(Object.assign({}, registerdValidators[target.constructor.name]));
}
function validate(obj) {
    const objValidatorConfig = registerdValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    console.log('objValidatorConfig', objValidatorConfig);
    for (const prop in objValidatorConfig) {
        console.log('prop', prop);
        for (const validator of objValidatorConfig[prop]) {
            console.log('validator', validator, 'validate target: ', obj[prop]);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', e => {
    e.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('正しく入力されていません。');
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map