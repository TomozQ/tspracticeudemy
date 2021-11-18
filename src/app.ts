type Admin = {
    name: string
    privilages: string[]
}

type Employee = {
    name: string
    startDate: Date
}

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee //2つのオブジェクトの型を１つにする

const e1: ElevatedEmployee = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date,
}

type Cominable = string | number
type Numeric = number | boolean

type Universal = Cominable & Numeric

function add ( a:Cominable, b: Cominable ){
    if(typeof a === 'string' || typeof b === 'string'){ //typeガード
        return a.toString() + b.toString()
    }
    return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee){
    console.log(emp.name)
    if('privilages' in emp){
        console.log("privilages" + emp.privilages)
    }
    if('startDate' in emp){
        console.log("startDate" + emp.startDate)
    }
}

printEmployeeInformation({name: 'manu', startDate: new Date()})

class Car {
    drive(){
        console.log('運転中')
    }
}

class Track{
    drive(){
        console.log('トラックを運転中')
    }

    loadCargo(amount: number){
        console.log('荷物を載せています・・・' + amount)
    }
}

type Vehcle = Car | Track

const v1 = new Car()
const v2 = new Track()

function useVehcle(vehicle: Vehcle){
    vehicle.drive()
    if(vehicle instanceof Track){  //instanceof での型ガード
        vehicle.loadCargo(1000)
    }
}

useVehcle(v1)
useVehcle(v2)

interface Bird{
    type: 'bird' //値ではない。birdという文字列のみを許容したstring型
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
    // if('flyingSpeed' in animal){
    //     console.log(animal.flyingSpeed)
    // }
    let speed
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
            break
    }
    console.log('移動速度: ' + speed)
}

moveAnimal({type: "bird", flyingSpeed: 10})

const paragraph = document.getElementById('message-output')
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')! //<HTMLInputElement>はgrovalに使える
const userInputElement = document.getElementById('user-input')! as HTMLInputElement

userInputElement.value = 'こんにちは'