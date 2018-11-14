import {Person} from './classes';

function echo<T>(arg: T): T {
    return arg;
};

//OR  var echo = <T>(arg: T): T => { return arg; }

var myVar1: string = echo("works here")
var myVar2: number = echo(1)
//var myVar1: number=  echo("wont works here")  //cause expecting return type number


class Admin extends Person {

    greet() { console.log("I'm admin"); }

}

class Manager extends Person {
    greet() { console.log("I'm Manager"); }
}
let person = new Person('pf', 'pl');
let admin = new Admin('af', 'al');
let manager = new Manager('mf', 'ml');

function greetPersonInstances<T extends Person>(person: T): T {
    person.greet();
    return person
}

var fooPerson = greetPersonInstances(person)
var fooAdmin = greetPersonInstances(admin)
var fooManager = greetPersonInstances(manager)
