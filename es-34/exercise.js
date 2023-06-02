const printAsyncName = (callback, name) => {
    setTimeout(() => {console.log(name)}, 2000);
    setTimeout(callback, 1000);
    }

const greet = () => {
    console.log("Hello");
}

printAsyncName(greet, "Gabri");
