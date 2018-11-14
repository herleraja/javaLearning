export class Person {

    firstName: string;
    lastName: string;


    constructor(firstName: string = ' ', lastName: string = ' ') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Or
    /*
        constructor(private firstName: string = ' ', private lastName: string = ' ') { }
    
        getFirstName() {
            return this.firstName;
        }
    
        setFirstName(firstName: string) {
            return this.firstName = firstName;
        }
    
        getLastName() {
            return this.lastName;
        }
    
        setLastName(firstName: string) {
            return this.firstName = firstName;
        }
    */
    getFullname(): string { return this.firstName + ' ' + this.lastName; }
    greet() { console.log("Hello Alien!") }
}

var aPerson1: Person = new Person();
console.log(aPerson1.getFullname());


var aPerson2: Person = new Person();
aPerson2.firstName = 'Amrith Raj';
aPerson2.lastName = 'Herle';

console.log(aPerson2.getFullname());

//Inheritance
class Programmer extends Person {

    greet() {
        console.log("Hello Programmer!");
    }

    greetAlien() {
        super.greet(); // calls the method of parent class.
    }
}

var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.greetAlien();

//Polymorphism. Refer using parent class type

var aProgrammerPerson: Person = new Programmer();
aProgrammerPerson.greet();  // But instance of type Programmer so output is "Hello Programmer!"
//aProgrammerPerson.greetAlien();  // Wont work, because we can use only method of the actual instance



//Readonly
class ReadOnlyPerson {
    constructor(readonly name: string) { }
}

let aReadOnlyPerson = new ReadOnlyPerson("Herle");
// aReadOnlyPerson.name = "Raj";  // Wont work, We can assign only in constructor or the time of variable declaration.


//ENUM Example

enum DayOfTheWeek {
    SUN = 1, MON, TUE, WED, THU, FRI, SAT  // Assign value to one then continuesly it increase from there.
}
let day: DayOfTheWeek = DayOfTheWeek.SUN;

if (day === DayOfTheWeek.SUN) {
    console.log("Om My GOD !!")
}


