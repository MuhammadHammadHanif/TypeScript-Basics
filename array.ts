const fruits = []; // empty array by default to 'any' type
const moreFruits: string[] = []; // have to define type on empty array

const extraFruits = ['mango', 'tomato', 'orange']; // no need to define type typescript will understand by array values but values have to be 1 type (means all of the array values mut be 1 datatype)

// Help with inference when extracting values
const myFruit = extraFruits[0]; // extraFruit is string[] typed array so const will automatically infered to string

// Prevent incompatible values
//extraFruits[0] = 12; // incompatible because extraFruit is string[] typed array and we provide number value

// Flexible Type array
const dates = [new Date(), '22-07-2020', 4]; // Typescript will infered it as (Date | string | Number) typed array only
const myDates: (string | boolean | number)[] = []; // by default have 'any' type so we have to define a type
myDates[0] = '23-07-2020';
myDates[1] = 2020;
myDates[3] = false;
