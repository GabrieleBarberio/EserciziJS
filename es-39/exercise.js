
const isLogged = true;

const randomNumbFromLog = (param) => {

    //in una funzione creo una Promise che  effettua un controllo sul mio parametro
  return new Promise((resolve, reject) => {
    if (param) { //se il parametro è true genera un numero dopo un timeout di 1000ms
      setTimeout(() => {
        const randomNumb = Math.random();
        resolve(randomNumb);
      }, 1000);
    } else { //altrimenti va in reject con il seguente messaggio "Effettuare l'accesso."
      reject("Effettuare l'accesso.");
    }
  });
};
//la seconda funzione prende come paramentro un numero
const personObj = (numb) => {
    //imposto ua nuova Promise in cui effettuo un controllo di valore sul parametro
  return new Promise((resolve, reject) => {
    if (numb > 0.5) { // se rispetta la condizione (numero maggiore di 0,5)
      setTimeout(() => { //restituisco l'oggetto dopo 1000ms
        const obj = { name: "John", age: 24 };
        resolve(obj); 
      }, 1000);
    } else {//altrimenti va in reject
      reject(new Error("Invalid Value!"));
    }
  });
};

randomNumbFromLog(isLogged)
  .then((randomNumb) => personObj(randomNumb))
  .then((obj) => {
    console.log(obj); // { name: "John", age: 24 }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Termine"));
