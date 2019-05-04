// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function tipAmount(billTotal, service) {
  var tip = 0;
  if (service == "good") {
    tip = billTotal * 0.2;
  } else if (service == "fair") {
    tip = billTotal * 0.15;
  } else {
    tip = billTotal * 0.1;
  }
  return "$" + tip.toFixed(2);
}

function totalAmount(billTotal, service) {
  var tip = 0;
  var total = 0;
  if (service == "good") {
    tip = billTotal * 0.2;
  } else if (service == "fair") {
    tip = billTotal * 0.15;
  } else {
    tip = billTotal * 0.1;
  }
  total = billTotal + tip;
  total = total.toFixed(2);
  return "$" + total;
}

console.log(totalAmount(100, "good"));
console.log(totalAmount(40, "fair"));
