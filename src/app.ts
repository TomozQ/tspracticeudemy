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