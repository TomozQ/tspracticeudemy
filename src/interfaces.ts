// // type AddFn = (a: number, b: number) => number ->こちらの関数型の定義が一般的
// interface AddFn {
//     (a: number, b:number): number   //関数型を定義
// }

// let add: AddFn

// add = (n1: number, n2: number) => {
//     return n1 + n2
// }
// //interface -> objectがどんな形のものであるか定義するためのもの
// interface Named {
//     readonly name?: string
//     outputName?: string  //このプロパティを持っているかどうかはどちらでも良い
// }
// // type Person = {  //typeとinterfaceは互換性がある。 interfaceはオブジェクトの構造を定義するためだけに使用できる
// interface Greetable extends Named{  //Namedを継承 複数のinterfaceを継承することができる。
//     greet(phrase: string): void
// }

// class Person implements Greetable {  //interfaceを実装する　複数定義できる
//     name?: string //オプショナル
//     age = 30

//     constructor(n?: string){
//         if(n){
//             this.name = n
//         }
//     }
//     greet(phrase: string){
//         if(this.name){

//             console.log(phrase + '' + this.name)
//         }else{
//             console.log('Hi')
//         }
//     }
// }   

// let user1: Greetable   //Personで定義されている内容をプロパティにもたなくてはならない

// user1 = new Person()   //上でGreetableと型定義しているが、PersonクラスはGreetableインターフェースを実装しているので問題なくインスタンス化できる。
// //interfaceに基づいたオブジェクトを作成している。
// // user1.name = 'Mane' interfaceのreadonlyを利用している。

// user1.greet('Hello i am ')

// console.log(user1)