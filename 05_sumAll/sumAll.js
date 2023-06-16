const sumAll = function(s ,n) {
let total = 0
if (typeof s == "string") {return "ERROR"}
if (typeof n == "string") {return "ERROR"}
if (n < 0) {return 'ERROR'}
if (s < 0) {return 'ERROR'}
if (s > n) {
for(let i = 1; i <= s; i++){
    total += i;
}
}
else if(n > s) { for(let i = 1; i <= n; i++){
    total += i;
}
} 
else {return 'ERROR'}
return total;
}




// Do not edit below this line
module.exports = sumAll;
