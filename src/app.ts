abstract class Department { //抽象クラス　継承先のクラスでは必ずabstractのメソッドを実装しなくてはならない  //抽象クラスはインスタント化することができない（new できない）
    static fiscalYear = 2020
    // private readonly id: string
    // name: string
    // private employees: string[] = [] // private クラスの内部からのみアクセスできる
    protected employees: string[] = [] // protected クラスの外からアクセスすることはできないが継承先のクラスからはアクセス可能

    static createEmployee(name: string) {
        return { name: name }
    }

    constructor(protected readonly id: string, public name: string) {  //上にプロパティを記述しなくてもここに定義することでショートカットできる
        // this.id = id                                                 //readonly -> 初期化以降値を変更できないようにする
        // this.name = n
        // console.log(this.fiscalYear) //staticプロパティはインスタンスからアクセスできない
        console.log(Department.fiscalYear) //クラスからはアクセスすることができる。
    }

    // describe(this: Department){  //ダミーパラメータを使用することで堅牢にする
    //     // console.log(`Department (${this.id}): ${this.name}`)
    // }

    abstract describe(this: Department): void  //abstractでは構造体のみ定義する。 メソッド名と戻り値の型
    //メソッド名はdescribeで無くてはならない・thisのオブジェクトはDepartmentクラスかそれを継承したサブクラスでないとならない・戻り値はvoid(何も返さないクラス)でなくてはならない

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

    describe(){
        console.log('IT部門　- id: ' + this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport: string

    get mostRecentReport() {  //Geter -> 必ず戻り値を設定しなくてはならない
        if(this.lastReport) {
            return this.lastReport
        }
        throw new Error('レポートが見つかりません')
    }

    set mostRecentReport(value: string) { //Setter -> 必ず引数を取らなくてはならない
        if (!value) {
            throw new Error('正しい値を設定してください。')
        }
        this.addReport(value)
    }

    constructor( id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.reports = reports
        this.lastReport = reports[0]
    }

    describe() {
        console.log('会計部門ID: ' + this.id)
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports)
    }

    addEmployee(name: string){
        if (name === 'Max'){
            return
        }
        this.employees.push(name)
    }
}

const employee1 = Department.createEmployee('Max')
console.log('employee', employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max']) //Departmentクラス（ベースクラス）のサブクラス

const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = '通期会計レポート'  //メソッドのように（）を記述しなくてよい この形で引数を渡す。
accounting.addReport('Something')
console.log(accounting.mostRecentReport) //Getterにはメソッドのように（）を記述しなくてよい

// accounting.printReports()
// console.log(accounting)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
// accounting.printEmployeeInformation()  //継承元のメソッドも使用することができる。

accounting.describe()

// console.log(it)

it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = 'Anna'　//employeesがprivateなのでアクセスできない 最近のprivate, publicの別があるJSであれば大丈夫だがそれ以外は実際にはコンパイルしてアクセスできてしまう

it.describe()
it.printEmployeeInformation()

console.log(it)

// const accountingCopy = { name: 'Dumy', describe: accounting.describe }  //Departmentクラスと同じプロパティであればTypeScriptはエラーを吐かない

// accountingCopy.describe()