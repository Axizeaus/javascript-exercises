const sumAll = function(n1, n2) {
    // checking if the input is valid.
    
    if (Number.isInteger(n1) && Number.isInteger(n2)){
        if (n1 < 0 || n2 < 0 ){
            return "ERROR";
        } else if (n1 < n2){
            let sum = 0;
            for ( n1 ; n1 <= n2 ; n1++){
                sum += n1;
            }
            return sum;
        } else {
            let sum = 0;
            for ( n2 ; n2 <= n1 ; n2++){
                sum += n2;
            }
            return sum;
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
