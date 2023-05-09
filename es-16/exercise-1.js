// Class definition
class Person {
    constructor (firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
    }
};
const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
