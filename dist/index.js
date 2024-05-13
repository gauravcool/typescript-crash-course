"use strict";
// Basic Types
let id = 5;
let company = 'Volkswagen GS';
let isPublished = true;
let x = 'Hello';
let ids = [1, 4, 2, 6, 9];
let arr = [1, 4, true, 'ada'];
// Tuple
let person = [1, 'Jack', true];
//Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Jill'],
    [4, 'Gary']
];
//Union
let pId;
pId = 789;
pId = 'SAUL';
//Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "D";
    Direction1["Left"] = "l";
    Direction1["Right"] = "r";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
const user = {
    id: 1,
    name: 'Brett'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// Void
function log(message) {
    console.log(message);
}
log('true');
const user1 = {
    id: 3,
    name: 'Luke'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, 'Brad');
const pitt = new Person(2, 'Pitt');
console.log(brad, pitt);
console.log(brad.register());
console.log(pitt.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, role) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
const emp = new Employee(123, 'Gary', 'Lead');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Maik', 'Tim', 'Luke', 'Enya']);
strArray.push('Feramuz');
