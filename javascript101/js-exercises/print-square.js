// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(num) {
  for (i = 0; i < num; i++) {
    var symbol = "*";
    console.log(symbol.repeat(num));
  }
}

printSquare(5);
