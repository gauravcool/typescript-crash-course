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
