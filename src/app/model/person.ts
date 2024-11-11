export class Person {
    name: string = "Beelz";
    address: string = "666 Brimstone Ct.";
    phone: string = "666-6666";
    email: string = "fallenangel@gmail.com";

    constructor(name: string = "", address: string = "", phone: string = "", email: string = ""
    ) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}

