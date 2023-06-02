function sum(num1, num2, ...rest) {
    let res = num1 + num2;
    for (const el of rest) {
        res += el;   
    }
    return res;
}


console.log(sum(1, 2, 3, 4, 5));