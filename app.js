// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: 'tomoki',
//     age: 30,
//     hobbies: ['sports', 'cokkies'],
//     role: [2, 'author'],
// }
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHER = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'tomoki',
    age: 30,
    hobbies: ['sports', 'cokkies'],
    role: Role.ADMIN
};
// person.role.push('admin') pushは許可されてしまう。
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}
