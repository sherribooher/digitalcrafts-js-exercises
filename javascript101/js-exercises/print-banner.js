// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch the length of the text.

function printBanner(text) {
  var length = text.length;
  var rowString = "";
  for (var row = 0; row < 3; row ++) {
    switch (row) {
      case 0:
        rowString = "*".repeat(length + 4);
        break;
      case 1:
        rowString = "* " + text + " *";
        break;
      case 2:
        rowString = "*".repeat(length + 4);
        break;
    }
    console.log(rowString);
  }
}
printBanner("Welcome to DigitalCrafts!");