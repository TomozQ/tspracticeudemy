//interface -> objectがどんな形のものであるか定義するためのもの
interface Named {
    readonly name: string
}
// type Person = {  //typeとinterfaceは互換性がある。 interfaceはオブジェクトの構造を定義するためだけに使用できる
interface Greetable extends Named{  //Namedを継承 複数のinterfaceを継承することができる。
    greet(phrase: string): void
}

class Person implements Greetable {  //interfaceを実装する　複数定義できる
    name: string
    age = 30
    constructor(n: string){
        this.name = n
    }
    greet(phrase: string){
        console.log(phrase + '' + this.name)
    }
}   

let user1: Greetable   //Personで定義されている内容をプロパティにもたなくてはならない

user1 = new Person('Max')   //上でGreetableと型定義しているが、PersonクラスはGreetableインターフェースを実装しているので問題なくインスタンス化できる。
//interfaceに基づいたオブジェクトを作成している。
// user1.name = 'Mane' interfaceのreadonlyを利用している。

user1.greet('Hello i am ')

console.log(user1)