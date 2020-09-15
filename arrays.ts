//Basic typescript array declaration

//string arary
let fruits: Array<string>;
fruits = ["Apple", "Orange", "Banana"];

// number array
let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

// if we want an array that can contain BOTH numbers AND strings
// the | symbol tells the TS code that the array can contain a string OR a number

// This can also be done with regular variables:
//
//    let value: (string | number);

//    value = 123;   -  OK
//    value = "ABC"; -  OK
//    value = false; - Compiler Error
//
let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
