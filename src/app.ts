/* 
////Type Basics
let character = 'Superman';
let age = 30;
let isFemale = false;

// character = 20;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));
*/

/*
////////////arrays////////////
////Example: Arrays with type of strings
let names = ['wyn', 'lee']; //initial declare=string
names.push('Wen');
names.push(2); //error, can only be string
names='hello'//error, can oly be array


////Example: Arrays with type of numbers
let numbers = [1, 5, 8]; //initial declare=number


////Example: Mixed Arrays
let mixed = ['Wyn', 1, 'Lee', 4, true, 5]; //initial declare=string, number or boolean
mixed.push(2);
mixed.push('orange');
*/

/*
////////////objects////////////
let me = {
  name: 'Wen-Lin', //initial declare=string
  age: 29, //initial declare=number
  glasses: false, //initial declare=boolean
};

me.age = 18;
me.age = 'hello'; //error, type can only be number
me.skills = ['english', 'japanese']; //error, we cannot add new properties
me = [1, 2, 3]; //error, it must be the object with same properties

//Example: we can update the values for the exact same properties and tyoes
me = {
  name: 'Wtn',
  age: 18,
  glasses: true,
};

//Example: we cannot have missing properties (Error)
me = {
  name: 'Wtn',
  age: 18,
};
*/

/*
////////////Explicit types////////////
////Normal variables
let character: string;
let age: number;
let isLoggedIn: boolean;

////array
let numArray: number[] = [];
let stringArray: string[] = [];
let booleanArray: boolean[] = [];

numArray = [1, 2, 3];
numArray = ['apple', 'orange']; //error

////union types (mix types)
//Example:Array
let mixed: (string | number | booleanå)[] = [];
mixed.push('weewe');
mixed.push(1);
mixed.push(true);
console.log(mixed);

//Example:Normal Variables
let uid: string | number;
uid = '123';
uid = 123;

////objects
//Example1
let aboutMe1: object;
aboutMe1 = {
  name: 'sewewr',
  age: 100,
};

//Example2
let aboutMe2: {
  name: string;
  age: number;
  glasses: false;
};


*/

/*
////////////Dynamic (any) Types////////////
//Example: normal variable
let age: any;

age = 25;
age = false;
age = { name: 'hello' };
console.log(age);

//Example: array with mixed values
let mixed: any[] = [];

mixed.push(1);
mixed.push('hello');
mixed.push(true);
console.log(mixed);

//Example: object with mixed values
let me: { name: any; age: any };

me = {
  name: 12,
  age: 'hello',
};
console.log(me);
*/

/*
////////////Functions///////////
//Example: try to set variable of a function to a string Error
let greet = () => {
  console.log('Hello World');
};

greet = 'hoho'; //error , greet has declared as function

//Example: Explicit for Functions
let greet2: Function;

greet = () => {
  console.log('Hello');
};

//Example: set types for parameters
const add = (a: number, b: number) => {
  console.log(a + b);
};

add(5, 7);

//Example: set optional  parameters,
const add2 = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add2(5, 7);
add2(5, 7, 'hello');

//Example: set optional  parameters, and with a default value set
const add3 = (a: number, b: number, c: number | string = 'default value') => {
  console.log(a + b);
  console.log(c);
};

add3(5, 7);
add3(5, 7, 'hello');

//Example: Function with returning value
const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(1, 1); //result will be a number type, because of the return from the function

//Example: set the return type of a function
const minus2 = (a: number, b: number): number => {
  return a + b;
};
*/
