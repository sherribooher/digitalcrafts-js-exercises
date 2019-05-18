// Write a function, factors, that is given a number and returns an array containing all of its factors.
function factors(num) {
  var factorsArr = [];
  for (var i = 0; i <= num; i++){
    if (num % i === 0) {
      factorsArr.push(i);
    }
  }
  return factorsArr;
}

console.log(factors(2155));
