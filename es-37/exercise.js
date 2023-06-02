const number = 15;


const checkNumb = (numb) => {
    return new Promise((resolve, reject) => {
        if(numb > 10 && typeof numb === "number"){
            resolve("Number is plus then 10")
        }else{
            reject("Invalid number value!")
        }
    })

}

checkNumb(number)
  .then((string) => {
    console.log(string);
  })
  .catch((error) => {
    console.error(error);
  });