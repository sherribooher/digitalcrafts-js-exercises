// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

function splitAmount(billTotal, service, numDiners) {
  var tip = 0;
  var total = 0;
  var split = 0;
  if (service == "good") {
    tip = billTotal * 0.2;
  } else if (service == "fair") {
    tip = billTotal * 0.15;
  } else {
    tip = billTotal * 0.1;
  }
  total = billTotal + tip;
  total = total.toFixed(2);
  split = total / numDiners;
  split = split.toFixed(2);
  return "$" + split;
}

console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));
