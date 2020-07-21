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

// Annotaion vs Inference
// Annotaion: When we as a developer define the type
// Inference: If declaration and initilization are on the same line typescript will figure out the type

// When to use annotatiion

// 1) Function that return the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // cordinates return 'any' type so declare type annotation
console.log(coordinates); // {x:10, y:20}

// 2) When we declare a variable and initilize it later
const words = ['green', 'yellow', 'orange'];
let foundWord: boolean; // foundWord return 'any' type so declare type annotation

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variablw whoes type cannot be esailt infered by typescript
const numbers = [-10, 1, 2];
let numberAboveZero: number | boolean = false; // can have multiple types

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
