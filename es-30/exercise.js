class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
    //statico perchè viene applicato sulla classe PErson e non sull'istanza dell'oggetto (riga 22)
  static fromJson(json) {
    const converted = JSON.parse(json);
    const {id, firstName, lastName, age} = converted;
    return new Person(id, firstName, lastName, age);
    
  }
} 

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

