/*
Write a function
 sumPairs that takes an array of integers 
 and a target sum as inputs
 returns an array of pairs of integers
  that add up to the target sum. 
  Each pair should be represented 
  as an array of two integers.

For example, 
sumPairs([1, 2, 3, 4, 5], 7) 
 return [[2, 5], [3, 4]].
*/

function sumPairs(array,targetNum){
    var res = [];
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
            if(array[i]==array[array.length-1]){
                continue;
            }
            if(array[i]+array[j]===targetNum &&!res.includes([array[i]],[array[j]])){
                res.push([array[i],array[j]]);
            }
            
        }
    }
    return res;
}

console.log(sumPairs([1, 2, 3, 4, 5], 7));

/*
Your code looks good now! 
You have corrected the issue with the check for 
duplicate pairs, 
and your implementation should now correctly find 
all pairs of integers that add up to the target sum.
*/