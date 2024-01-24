interface Dog{
  breed: string;
  name: string;
  goForWalk: (distance: number) => boolean;
}


const myDog: Dog = {
  breed: 'labrador retriever',
  name: 'doggo',
  goForWalk: (distance: number) => {
    return true;
  }
}


const higherOrderFunction = (cb: (name: string, age: number) => string): void => {
  cb('bob', 32);
}


higherOrderFunction((name: string, age: number) => {return "hello"})
