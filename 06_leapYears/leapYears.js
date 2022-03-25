const leapYears = function(yr) {
    return !((yr % 4) || (!(yr % 100) && (yr % 400)));
};

// Do not edit below this line
module.exports = leapYears;
