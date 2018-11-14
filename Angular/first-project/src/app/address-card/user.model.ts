export class User {
    name: string;
    designation: string;
    address: string;
    phone: string[];

    constructor(userResponse) {
        this.name = userResponse.name;
        this.designation = userResponse.designation;
        this.address = userResponse.address;
        this.phone = userResponse.phone;

    }
}