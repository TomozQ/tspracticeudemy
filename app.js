// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'tomoki',
    age: 30,
    hobbies: ['sports', 'cokkies']
};
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
