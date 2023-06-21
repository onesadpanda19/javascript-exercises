const leapYears = function(years) {
if (!(years % 4) && years % 100 || !(years % 400) ) { return true 
} else {return false}
}

// Do not edit below this line
module.exports = leapYears;
