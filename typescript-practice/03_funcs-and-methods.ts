// arguments, return value, name of the function

const sayHello = (name: string, age: number = 42): string => {
  return `hello there ${name}`;
 }


 const returnVal1 = sayHello('bob');
 const returnVal2 = sayHello('bob', 32);

const returningPrommise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPrommise(100)
.then((data) => {})
