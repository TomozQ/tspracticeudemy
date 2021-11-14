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

const accounting = new Department('d1','Accounting')

// console.log(accounting)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'　//employeesがprivateなのでアクセスできない 最近のprivate, publicの別があるJSであれば大丈夫だがそれ以外は実際にはコンパイルしてアクセスできてしまう

accounting.describe()
accounting.printEmployeeInformation()


// const accountingCopy = { name: 'Dumy', describe: accounting.describe }  //Departmentクラスと同じプロパティであればTypeScriptはエラーを吐かない

// accountingCopy.describe()