class Department {
    // private readonly id: string
    // name: string
    private employees: string[] = [] // private クラスの内部からのみアクセスできる

    constructor(private readonly id: string, public name: string) {  //上にプロパティを記述しなくてもここに定義することでショートカットできる
        // this.id = id                                                 //readonly -> 初期化以降値を変更できないようにする
        // this.name = n
    }

    describe(this: Department){  //ダミーパラメータを使用することで堅牢にする
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
        // this.id = 'd2' //readonly
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    // admins: string[]
    constructor( id: string, private admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department{
    constructor( id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.reports = reports
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ITDepartment('d1', ['Max']) //Departmentクラス（ベースクラス）のサブクラス

const accounting = new AccountingDepartment('d2', [])
accounting.addReport('Something')
accounting.printReports()
console.log(accounting)

// console.log(it)

it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = 'Anna'　//employeesがprivateなのでアクセスできない 最近のprivate, publicの別があるJSであれば大丈夫だがそれ以外は実際にはコンパイルしてアクセスできてしまう

it.describe()
it.printEmployeeInformation()

console.log(it)

// const accountingCopy = { name: 'Dumy', describe: accounting.describe }  //Departmentクラスと同じプロパティであればTypeScriptはエラーを吐かない

// accountingCopy.describe()