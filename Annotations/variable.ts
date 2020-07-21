// Baasic Syntax

// Primitive
let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

// Array
let color: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [0, 1, 2];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 100,
};

// Functions
const logNumber: (i: number) => void = (i: number) => console.log(i);
