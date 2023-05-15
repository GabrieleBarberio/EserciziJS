class Person {
  #_lastName;
  #_firstName;
  #_age;

  constructor(firstName, lastName, age) {
    this.#_firstName = firstName;
    this.#_lastName = lastName;
    this.#_age = age;
  }
  set firstName(val) {
    if (typeof val === "string" && val.length > 1) {
      this.#_firstName = val;
    } else {
      return console.error("expected first name value ");
    }
  }

  set lastName(val) {
    if (typeof val === "string" && val.length > 1) {
      this.#_lastName = val;
    } else {
      return console.error("expected lastname value ");
    }
  }
  get fullName() {
    return this.#_firstName + " " + this.#_lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
