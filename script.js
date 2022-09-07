/*
Given an unsorted array of length N, 
and we have to find the largest gap between any two elements of the array.
In simple words, find max(|Ai-Aj|) 
where 1 ≤ i ≤ N and 1 ≤ j ≤ N.
Examples:  
Input : arr = {3, 10, 6, 7}
Output : 7
Explanation :
Here, we can see largest gap can be
found between 3 and 10 which is 7
Input : arr = {-3, -1, 6, 7, 0}
Output : 10
Explanation :
Here, we can see largest gap can be 
found between -3 and 7 which is 10

**REQUIREMENT UPDATE**----------------------------------

SEE script 2


Input: arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4} 
Output: 6 
{4, -1, 2, 1} is the required sub-array.
Input: arr[] = {2, 2, -2} 
Output: 4 



*/

//James Hardy
const testArr0 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const testArr2 = [-3, -1, 6, 7, 0];
const testArr1 = [3, 10, 6, 7];
const testArr3 = [];



const findLargestGapInArray = (array)=>{
    let paramArraySorted = array.sort();
    let max = Math.max(...paramArraySorted);
    let min = Math.min(...paramArraySorted);
    let res = max - min;
    return res;
}

const edgeCaseArrayCreator = ()=>{
    var i = 0;
    while(i < 100){
        testArr3.push(i);
        i++
        }
    }

edgeCaseArrayCreator();//populate testArr3

console.log(findLargestGapInArray(testArr1)); //7  PASS
console.log(findLargestGapInArray(testArr2)); //10 PASS
console.log(findLargestGapInArray(testArr3)); //99 PASS
console.log(findLargestGapInArray(testArr0));