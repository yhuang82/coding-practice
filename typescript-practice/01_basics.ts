let myNum: number | string | boolean = 5;

myNum = 42;
myNum = 'Hello';
myNum = true; // Error

const nums: (number | boolean)[] = [];
nums.push(5);
nums.push(true);
// nums.push('Hello'); // Error

const myVar = nums.pop();
