

function sum(num1, ...rest) {
  return num1 + rest.reduce((a,b) => {
    return a + b
  } , 0);
}

const numbers = [1, 2, 3];
// console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));
