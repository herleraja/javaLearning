// Type declareation for variable

var a: number;
//a = 10;
//a = true; //wont work or compiler error

var b: boolean;
var c: string;

var myArray: number[];
//myArray = [];
//myArray = [1,2,3.0];
//myArray.push(1);
//myArray.push('her'); //wont work or compiler error
//myArray = [1,'herle', true]; //wont work or compiler error


//any type (by default any) -->  "var anyvar:any" and "var anyvar" are same
var anyVar: any;
anyVar = 10;
anyVar = 'Test';

//union type using pip(|)
var unionVar: boolean | string;
//unionVar = 10; //wont work or compiler error beacuse its union of only two datatypes.
//unionVar = true;
//unionVar = 'Test';



//Need flexible array ? ---> use tuple
var myTuple: [number, boolean];

//myTuple = [1,true];
//myTuple = [1]; //wont work


// Function parameter declareation
// The add fuction alway return number by specifying : number after the function parameters
var add = (a: number, b: number): number => a + b;
//console.log(add(1,3));
//console.log(add(1,"3")); //wont work in ts or compiler error
// add(2); //wont work in ts or compiler error


//Need flexible function ? ---> use optional parameter (?) or default value
// var addWithOprional = (a: number, b: number, c?: number, d: number = 0) => a + b + c + d;
// addWithOprional(2,2);
//console.log(addWithOprional(2, 2,3));
//addWithOprional(2, 2, 3, 4, 5);  //wont work in ts or compiler error

