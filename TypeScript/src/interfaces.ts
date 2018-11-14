interface PersonInterface {
    firstName: string;
    lastName: string;
    getFullname(): string
}

class NewPerson implements PersonInterface{
    firstName: string;    lastName: string;
    constructor(firstName: string = ' ', lastName: string = ' ') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullname(): string {
        return this.firstName + ' ' + this.lastName; 
    }
}


let aNewPerson: PersonInterface  = new NewPerson();
console.log(aNewPerson.getFullname());

let someObj = {
    firstName: "string",
    lastName: "string",
    age : 29, // Even having extra property it is similar to PersonInterface
    getFullname: () => "string"
};

//Duck Type: the structure of someObj similar to aNewPerson
aNewPerson = someObj;
console.log(aNewPerson);