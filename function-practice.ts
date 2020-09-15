// Without TS, parameter variable types are not specified
// therefore, "x" and "y" can be any data type (that can 
// be added together in JS) here
const nonTsAddFunction = (x, y) => {
  return x + y;
};


// - With TS, parameters are specified to a specific type
// - Return type is also specified after parameters
// - If we try to add a string to x, we will get an error as TS expects
//   that the "y" parameter will be a number
// - If the function does not return a number, we will also get an error
const explicitTsAdd = (x: number, y: number): number => {
  return x + y;
};

console.log(explicitTsAdd(1, 1));
// 2

