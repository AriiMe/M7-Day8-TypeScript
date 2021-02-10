console.log('hello typescript')
//tsc -w index.ts
console.log('hello2')
//everything you write here gets compiled into index.js
let i: number = 10;
let x: string = "sup homie";

let array: string[]

array = ['stefano']

let a:any; 

// const addition = (n1, n2) => {
//     if (typeof n1 === 'number' && typeof n2 === 'number') {
//         return n1 + n2
//     } else {
//         console.log("provide numbers g")
//     }
//     
// }
type ValidType = number | string

const addition = (n1: ValidType, n2: ValidType) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
                return n1 + n2
            } else {
                console.log("provide numbers g")
            }
}


console.log(addition(2,"3"))


interface InventoryObj  {
    shape: string,
    color: string,
    size?: ValidType, //without question mark const obj will have error
}

interface newInventoryObject extends InventoryObj{
    intemId: number,

}
const obj1: newInventoryObject = {
    shape: 'round',
    color: 'green',
    size: 100,
    intemId: 1
}

type InventoryObj1 =  {
    shape: string,
    color: string,
    size: ValidType,
}

const obj: InventoryObj = {
    shape: 'round',
    color: 'green',
    
}

//interface is like type, but it's only for objects and can be extended ex. no need to rewrite it

obj.size = 'large'

interface StriveStaff {
    name: string,
    age?: string,
    role: string
}

let striveTutors: array <StriveStaff>=[
    {
        name: 'stefano',
        age: 33,
        role: 'teacher'
    },
    {
        name: 'Riccardo',
        age: 35,
        role: 'teacher'
    },
    {
        name: 'Stefano',
        age: 31,
        role: 'teacher'
    },
    {
        name: 'Diego',
        role: 'Master of strive'
    }
]

console.log(striveTutors[1].role)