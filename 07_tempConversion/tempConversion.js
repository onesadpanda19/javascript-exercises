const convertToCelsius = function(num) {
let newNum = (num - 32) * (5/9) ;
  console.log (newNum)
 let newNum2 = Math.round (newNum * 10) / 10
  return newNum2
};

const convertToFahrenheit = function(num) {
 let newNum = (num * (9/5) + 32);
 console.log (newNum)
 let newNum2 = Math.round (newNum * 10) / 10
 return newNum2 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
