const repeatString = function(string, num) {
    arr = []
    for (let i = 0; i < num; i++){
   	arr.push(string)
    }
    if (num < 0){
        return 'ERROR'
    } else {
        return arr.join('')
    }
};

// Do not edit below this line
module.exports = repeatString;
