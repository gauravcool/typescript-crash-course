// Basic Types
let id: number = 5
let company: string = 'Volkswagen GS'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 4, 2, 6, 9]
let arr: any[] = [1, 4, true, 'ada']

// Tuple
let person: [number, string, boolean] = [1, 'Jack', true]
//Tuple Array
let employee: [number, string][]
employee = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Jill'],
    [4, 'Gary']
]

//Union
let pId: number | string
pId = 789
pId = 'SAUL'

//Enum
enum Direction1 {
    Up='Up',
    Down='D',
    Left='l',
    Right='r'
}
console.log(Direction1.Down)

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Brett'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 3))

// Void
function log(message: string | number): void {
    console.log(message)
}
log('true')

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}
const user1: UserInterface = {
    id: 3,
    name: 'Luke'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}

const brad = new Person(1, 'Brad')
const pitt = new Person(2, 'Pitt')
console.log(brad, pitt)

console.log(brad.register())
console.log(pitt.register())

// Subclasses
class Employee extends Person {
    role: string

    constructor(id: number, name: string, role: string) {
        super(id, name)
        this.id = id
        this.name = name
        this.role = role
    }
}

const emp = new Employee(123, 'Gary', 'Lead')
console.log(emp.register())