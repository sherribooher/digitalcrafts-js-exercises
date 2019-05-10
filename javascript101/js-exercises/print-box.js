// Write a function printBox which is given a width and height and prints a hollow box of given dimensions.

function printBox(width, height) {
  var x, y;
  for (y = 0; y <= height - 1; y++) {
    if (y == 3) {
      console.log("*".repeat(width));
    }
    if (x == width && y == 1) {
      console.log("*");
    }
    for (x = 0; x <= width - 1; x++) {
      if (x == 0 && y == 0) {
        console.log("*".repeat(width)); // first line prints x number of stars
      }
      if (x == 0 && y == 1) {
        console.log("*");
      }
    }
  }
}

printBox(6, 4);
