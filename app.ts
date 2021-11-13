// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
} = {
    name: 'tomoki',
    age: 30,
    hobbies: ['sports', 'cokkies'],
    role: [2, 'author'],
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