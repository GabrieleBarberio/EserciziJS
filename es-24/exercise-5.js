const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
  

//Non avendo capito bene la richiesta dell'esercizio ho fatto sia il refactoring delle key dell'oggetto ( per non modificare const  { id, name, surname, old } = person)
//sia assegnati gli alias in riga 18

// const person = {
//   id: 1,
//   name: 'Mario',
//   surname: 'Rossi',
//   old: 25
// };
const { id: id,  firstName: name , lastName: surname ,  age: old } = person;

// const { id, name, surname, old } = person;

console.log(id, name, surname, old);