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
