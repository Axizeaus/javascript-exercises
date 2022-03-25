const fibonacci = function(n) {
    n = Number(n);
    if (n < 0){
        return "OOPS";
    }
    let arr = fib(n + 1);
    return arr[arr.length - 2];
};

function fib(n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fib(n - 1)
    return [...arr, arr[n-1] + arr[n-2]]
}

fibonacci(4);
console.log(fib(10));
console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
