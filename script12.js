/*
Write a function countOccurrences 
that takes an array of strings
 and a target string
 returns the number of times 
 the target string appears in the array.

For example, 
countOccurrences(["apple", "banana", "pear", "banana"], "banana") should return 2.
*/


function countOccurrences(array,targetStr){
    var counter = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i]==targetStr){
        counter++;
      }
    }
    return counter;
}
console.log(countOccurrences(["apple", "banana", "pear", "banana"], "banana"));