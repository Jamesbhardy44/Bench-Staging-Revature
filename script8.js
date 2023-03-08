function getLowestConsecutiveSequence(array) {
    var start = -1;
    var end = -1;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (i === 0 || array[i] !== array[i - 1] + 1) { // start of a new sequence
        count = 1;
        start = i;
      } else {
        count++;
      }
      if (count === 3) {
        end = i;
        break;
      }
    }
    if (start === -1 || end === -1) {
      return [];
    } else {
      return array.slice(start, end + 1);
    }
  }
  
  console.log(getLowestConsecutiveSequence([1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 4, 5])); // should return [1, 2, 3]