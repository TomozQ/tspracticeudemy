class Department {
    name: string
    private employees: string[] = [] // private クラスの内部からのみアクセスできる

    constructor(n: string) {
        this.name = n
    }

    describe(this: Department){  //ダミーパラメータを使用することで堅牢にする
        console.log("Department: " + this.name)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting')

// console.log(accounting)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'　//employeesがprivateなのでアクセスできない 最近のprivate, publicの別があるJSであれば大丈夫だがそれ以外は実際にはコンパイルしてアクセスできてしまう

accounting.describe()
accounting.printEmployeeInformation()


// const accountingCopy = { name: 'Dumy', describe: accounting.describe }  //Departmentクラスと同じプロパティであればTypeScriptはエラーを吐かない

// accountingCopy.describe()