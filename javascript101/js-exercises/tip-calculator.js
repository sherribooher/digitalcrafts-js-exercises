// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair, and poor) and returns the dollar amount for the tip. Based on: good --> 20%, fair --> 15%, bad --> 10%

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

console.log(tipAmount(100, "good"));
