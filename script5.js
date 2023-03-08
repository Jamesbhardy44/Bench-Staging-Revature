/*
Write a function that takes in two arrays of integers 
and returns a new array containing only the elements that appear in both arrays.

For example, 
given the input arrays 

[1, 2, 3, 4] and [3, 4, 5, 6]

the function should return 
[3, 4]

Your function should work for arrays of any length, 
and it should handle duplicate values in the input arrays.
*/

var testArrOne = [2, 4, 6, 8];
var testArrTwo = [4, 2, 5, 7];
var testArrThree = [2,2,2,2,1,0];

function _removeDuplicates(array){
    var res = [];
    for(var i = 0; i < array.length-1; i++){
        if(res.includes(array[i])){
            continue;
        }
        else{
            res.push(array[i]);
        }
    }
    return res;
}

function getCommonElements(arrOne,arrTwo){
    var res = [];
    for(var i in arrOne){
        for(var j in arrTwo){
            if(arrOne.includes(arrTwo[j])){
                res.push(arrTwo[j]);
            }
        }
    }
    
    return 'result: '+_removeDuplicates(res);
}
console.log(getCommonElements(testArrOne,testArrTwo));


/*
AI feedback:
Great job! 
Your implementation of the function to get common elements in two arrays looks good to me. 
You're using nested loops to iterate through each element in both arrays 
and checking if an element is included in the other array using the Array.includes() method. 
If it is, you're pushing it to the result array.

One thing you might want to consider 
is using a more efficient approach to check for duplicates in the result array.
 The _removeDuplicates() function you're using works, 
 but it has a time complexity of O(n^2) 
 because it's using another loop to iterate through the result array
  for each element in the input array. 
  A more efficient approach would be to use a hash table
   to keep track of the elements that have already been added to the result array, 
   which would reduce the time complexity to O(n).

   --see ./script6.js
*/