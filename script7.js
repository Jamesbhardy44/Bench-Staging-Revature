function getMostCommonChar(strIn) {
    var charCount = {};
    strIn = strIn.toLowerCase().replace(/\s/g, ''); // convert to lowercase and remove whitespace
    for (var i = 0; i < strIn.length; i++) {
      var currentChar = strIn[i];
      if (charCount.hasOwnProperty(currentChar)) {
        charCount[currentChar]++;
      } else {
        charCount[currentChar] = 1;
      }
    }
    var maxCount = 0;
    var mostCommonChar = '';
    for (var char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        mostCommonChar = char;
      }
    }
    return mostCommonChar;
  }
  
  console.log(getMostCommonChar('Patrick Bateman'));