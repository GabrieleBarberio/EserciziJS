function multiplyByTwo(value) {
  let number = 2;
  return () => {
    let multiplied = number * value ;
    return multiplied;
  }
}
console.log(multiplyByTwo(4)());
