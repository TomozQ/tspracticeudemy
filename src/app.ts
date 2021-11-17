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