// validate by Decorator

interface ValidatorConfig {
    [prop: string]: {
        [validatableProp: string]: string[]         //['required', 'Positive']
    }
}

const registerdValidators: ValidatorConfig = {}

//デコレーター関数
function Required(target: any, propName: string){ 
    console.log('Required target', target)                                            //classオブジェクト
    console.log('Required propName', propName)                                        //title
    console.log('registerdValidators', registerdValidators)                           //{}
    registerdValidators[target.constructor.name] = {                                  //registerdValidatorsに新しいプロパティを追加する -> この場合keyはtitle
        ...registerdValidators[target.constructor.name],                              //[target.constructor] ->prototypeのconstructorを参照　nameプロパティはjsの関数には必ずあるプロパティ(関数の名前を取得できる) この場合はCourse
        [propName]: [       //title
            ...(registerdValidators[target.constructor.name]?.[propName] ?? []),
            "required",
          ],
    }
    console.log('registerdValidators', registerdValidators)  
    console.log({...registerdValidators[target.constructor.name]})
}

function PositiveNumber(target: any, propName: string){
    registerdValidators[target.constructor.name] = {
        ...registerdValidators[target.constructor.name],
        [propName]: [
            ...(registerdValidators[target.constructor.name]?.[propName] ?? []),        // ?? -> a ?? b aがnullまたはundefinedだった場合bを利用する
            "positive",
          ],
    }
    console.log({...registerdValidators[target.constructor.name]})
}

function validate(obj: any){
    const objValidatorConfig = registerdValidators[obj.constructor.name]    //Course

    if(!objValidatorConfig){                                                //validationの設定が無い場合はtrue(検証するものが無い)
        return true
    }

    let isValid= true
    // 登録されているバリデーターの情報を全てループ
    console.log('objValidatorConfig', objValidatorConfig)
    for (const prop in objValidatorConfig){
        console.log('prop', prop)

        for (const validator of objValidatorConfig[prop]){
            console.log('validator', validator, 'validate target: ', obj[prop])
            switch (validator){
                case 'required':
                    isValid = isValid && !!obj[prop]    // !! -> booleanに変換 true
                    break
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor(t: string, p: number){
        this.title = t
        this.price = p
    }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', e => {
    e.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value

    const createdCourse = new Course(title, price)

    if(!validate(createdCourse)){
        alert('正しく入力されていません。')
        return
    }
    console.log(createdCourse)
})