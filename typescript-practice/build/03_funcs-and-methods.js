"use strict";
// arguments, return value, name of the function
const sayHello = (name, age = 42) => {
    return `hello there ${name}`;
};
const returnVal1 = sayHello('bob');
const returnVal2 = sayHello('bob', 32);
const returningPrommise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPrommise(100)
    .then((data) => { });
