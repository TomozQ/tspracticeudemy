// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'tomoki',
    age: 30,
    hobbies: ['sports', 'cokkies']
}

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())
} 