class Person {

    firstName: string;
    lastName: string;

    constructor(firstName: string = ' ', lastName: string = ' ') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

/*
Baisc Comple instructions
--out specify output js file name
--watch auto recompiling

tsc .\test.ts --out output-script.js --watch

//To create a sample configuration file.
tsc --init

*/