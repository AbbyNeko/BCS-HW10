class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns employee name
    getName() {

        return this.name;

    }

    //returns employee id
    getId() {

        return this.id;

    }

    //returns employee email
    getEmail() {

        return this.email;

    }
    
    //Returns Employee as a string
    getRole() {

        return "Employee";

    }

}

module.exports = Employee;