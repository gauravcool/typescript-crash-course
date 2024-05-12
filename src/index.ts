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