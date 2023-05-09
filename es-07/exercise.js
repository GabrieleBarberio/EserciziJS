function printName() {
  let helloName = "Hello John";
  const inner = (param) => {
    setTimeout(() => {
      param(helloName);
    }, 1000);
  };

  return inner;
}
printName()(console.log);
