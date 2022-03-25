const add = function(x, y) {
    return x + y;
	
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let ans = 0;
    for (let i of arr){
        ans += i;
    }
    return ans;
};

const multiply = function(arr) {
    let ans = 1;
    for (let i of arr){
        ans *= i;
    }
    return ans;

};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
	if (n < 0){
        return -1;
    } else if (n == 0){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
