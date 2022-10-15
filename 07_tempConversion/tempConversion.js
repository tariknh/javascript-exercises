const ftoc = function(fahrenheit) {
  let fahrTemp = fahrenheit;
  fahrTemp = (fahrTemp - 32) * 5/9;
  return Math.round(fahrTemp * 10) / 10;
};

const ctof = function(celcius) {
  let celcTemp = celcius;
  celcTemp = celcTemp*(9/5)+32;
  return Math.round(celcTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
