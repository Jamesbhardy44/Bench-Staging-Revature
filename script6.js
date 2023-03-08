/*
In this updated version, 
we're using a hash table 
called seen 
to keep track of the elements in the first array.

We iterate through arrOne 
and add each element to seen 
as a key with a value of true.

Then, 
we iterate through arrTwo
 and check if each element is in seen 
 If it is and it hasn't already been added to res
 we add it to res
  Finally, we return res

This approach is more efficient 
because it uses a hash table to check for duplicates, 
which has a time complexity of O(1) for each lookup.
*/

//AI solution:
function getCommonElements(arrOne, arrTwo) {
    var res = [];
    var seen = {};
  
    for (var i = 0; i < arrOne.length; i++) {
      seen[arrOne[i]] = true;
    }
  
    for (var i = 0; i < arrTwo.length; i++) {
      if (seen[arrTwo[i]] && !res.includes(arrTwo[i])) {
        res.push(arrTwo[i]);
      }
    }
  
    return res;
  }
  
  var testArrOne = [2, 4, 6, 8];
  var testArrTwo = [4, 2, 5, 7];
  var testArrThree = [2, 2, 2, 2, 1, 0];
  
  console.log(getCommonElements(testArrOne, testArrTwo));
  console.log(getCommonElements(testArrOne, testArrThree));