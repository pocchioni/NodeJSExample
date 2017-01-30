//math.js
var sum = function(a, b) { //definiamo la funzione sum
  return a+b;
}

var prod = function(a, b) { //definiamo la funzione product
  return a*b;
}

var private = function(a,b) {
  return "Io sono private!!";
}

exports.sum = sum; //esportiamo la funzione sum
exports.prod = prod; //esportiamo la funzione product
// non esportiamo private
