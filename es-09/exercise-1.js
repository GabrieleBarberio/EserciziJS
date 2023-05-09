const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
const print = (obj) => {
  const entries = Object.entries(obj);
    for (const i of entries) {
      const [key , val] = i;
       console.log(`${key} ${val}`);
           
    }
  }

print(person);
