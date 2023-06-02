class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object

//JSON Methods
const developerJSON = JSON.stringify(developer)

//JSON Syntax
// const developer = {
//   "id": 1,
//   "firstName": "Mario",
//   "lastName" : "Rossi",
//   "age" :  25
// };

console.log(developer);
console.log(developerJSON);
