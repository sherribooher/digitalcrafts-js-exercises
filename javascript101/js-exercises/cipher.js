// Write a function, cipher, which is given a string, an offset, and it returns the Caesar cipher of the string.
function cipher(plainText, offsetNum) {
  var secretText = "";
  plainText = plainText.toUpperCase();
  for (var i = 0; i < plainText.length; i++) {
    var asciiCode = plainText.charCodeAt(i);
    if (asciiCode >= 65 && asciiCode <= 77) {
      secretText += String.fromCharCode(asciiCode + offsetNum);
    }
    else if (asciiCode >= 78 && asciiCode <= 90) {
      secretText += String.fromCharCode(asciiCode - offsetNum);
    } 
    else {
      secretText += plainText[i];
    }
  }
  return secretText;
}

console.log(cipher('Genius without education is like silver in the mine', 13));
