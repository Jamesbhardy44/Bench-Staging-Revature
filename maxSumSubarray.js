/*
Input: arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4} 
Output: 6 

{4, -1, 2, 1} is the required sub-array.
Input: arr[] = {2, 2, -2} 
Output: 4 

--James Hardy 
09/08/2022

*/
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr2 = [2, 2, -2];

const temp = {};

const secondMax = (array)=>{ 
    let max = Math.max.apply(null, array); 
    temp.removed = max;
    array.splice(array.indexOf(max), 1); 
    let newMax = Math.max(...array);
    return newMax; 
};

const restoreArray=(array)=>{ 
    let insert = temp.removed;
    array.push(insert);
    return array;
}

const findMaxSubArray = (array)=>{
    console.log('input: ' + array);
    let max = Math.max(...array);
    let min = Math.min(...array);
    let minIndex = array.indexOf(min);
    let maxIndex = array.indexOf(max);

    for(let i=0; i < array.length; i++){
        if(array[i] === max){  
            let res = {};
            res.array = array.slice(maxIndex, minIndex);
            res.max = Math.max(...res.array);
            res.maxTwo = secondMax(res.array);
            res.min = Math.min(...res.array);
            restoreArray(res.array);
            res.min = Math.min(...res.array);
            res.sum = res.max + res.maxTwo;
            return res.sum;
        }
    }
}

console.log('---------------------------------');
console.log('expected: 6 \n'+ 'output:'+ findMaxSubArray(arr1));
console.log('---------------------------------');
console.log('expected: 4 \n'+ 'output:'+findMaxSubArray(arr2));
