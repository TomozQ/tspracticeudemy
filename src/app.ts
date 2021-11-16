//interface -> objectがどんな形のものであるか定義するためのもの
interface Person {
    name: string
    age: number
    greet(phrase: string): void
}

let user1: Person   //Personで定義されている内容をプロパティにもたなくてはならない

user1 = {   //interfaceと同じ型のものが定義されているかをチェックされる
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + '' + this.name)
    }
}

user1.greet('Hello i am ')