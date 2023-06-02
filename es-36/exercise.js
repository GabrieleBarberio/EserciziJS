

const repeatHello = () => {
    // punto alla variabile interval la funzione setInterval 
   const interval = setInterval(() => {
        console.log("Hello");
    }, 1000);

    setTimeout(() => clearInterval(interval), 5000)
    //imposto tramite la funzione setTimeout una latenza di 5 secondi prima di eseguire la arrow function che contiene la funzione clearInterval che "pulisce" la funzione contenuta in interval
}
repeatHello()
