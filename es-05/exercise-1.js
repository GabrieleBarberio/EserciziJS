const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


//function Person ( firstName , lastName , age){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
//let newPerson =  new Person("Simon", "Doe", 25)
const person2 = person1; 
person2.firstName = "Simon"; 
// la costante person2 fa riferimento, o punta, all'oggetto originale.
// andando a riassegnare il valore  corrispondente alla chiave firstName nella costante person2
// andiamo a modificare effettivamente l'oggetto originale. Per evitare questo processo possiamo creare 
// un nuovo oggetto con il metodo costruttore

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
