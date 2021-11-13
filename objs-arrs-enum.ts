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

enum Role {    //enumの定義
    ADMIN = 'ADMIN' ,
    READ_ONLY = 100, 
    AUTHOR = 200,
}

const person = {
    name: 'tomoki',
    age: 30,
    hobbies: ['sports', 'cokkies'],
    role: Role.ADMIN,
}

// person.role.push('admin') pushは許可されてしまう。
// person.role[1] = 10

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())
}

if (person.role === Role.ADMIN){
    console.log('管理者ユーザー')
}