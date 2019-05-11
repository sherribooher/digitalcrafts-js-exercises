// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(size) {
  for (var row = 0; row < size; row++) {
    var rowString = "";
    for (var column = 0; column < size; column++) {
      rowString += "*";
    }
    console.log(rowString);
  }
}

printSquare(5);
