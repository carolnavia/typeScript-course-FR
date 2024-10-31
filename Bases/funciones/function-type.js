"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //! let myFunction:Function
    //! myFunction = 10;
    //!  console.log(myFunction);
    //? let myFunction:(y:number, z:number) => number;
    //? myFunction = addNumbers;
    //?  console.log(myFunction(1, 2));
    //*let myFunction: (y: string) => string;
    //* myFunction = greet;
    //*console.log(myFunction("Carol"));
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
