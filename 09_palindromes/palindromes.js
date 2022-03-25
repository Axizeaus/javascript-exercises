const palindromes = function (s) {
    let filtered = Array();
    for (let i of s){
        if (isAlpha(i)){
            filtered.push(i.toLowerCase());
        } 
    }
    const original = filtered.slice().join('');
    const reversed = filtered.reverse().join(''); 

    if (original == reversed){
        return true;
    } else {
        return false;
    }
};

function isAlpha(c){
    return (/[a-zA-Z]/).test(c)
}


// // Do not edit below this line
module.exports = palindromes;
