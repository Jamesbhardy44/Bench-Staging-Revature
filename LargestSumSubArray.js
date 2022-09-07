/*

Input: arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4} 

Output: 6 


{4, -1, 2, 1} is the required sub-array.


Input: arr[] = {2, 2, -2} 

Output: 4 


##can get one or the other to work. 

did shanker make an error with the question?



*/

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr2 = [2, 2, -2];

const add = (array)=>{
    let sum =0;
    for(let i = 0; i < array.length; i++){
       
        sum += array[i];
    }
    return sum;
}

const findMaxSubArray = (array)=>{
    console.log('input: ' + array);
    let max = Math.max(...array);
    let index = array.indexOf(max);
    for(let i=0; i < array.length; i++){
        if(array[i] === max){  
            let res = {};
            res.array = array.slice(index, index + 4);
            res.max = Math.max(...res.array);
            res.min = Math.min(...res.array);
            res.sum = add(res.array);
            console.log('sub array: '+ res.array);
            return res.sum;
        }
    }
}


console.log('expected: 6 \n'+ 'output:'+ findMaxSubArray(arr1));
console.log('---------------------------------');
console.log('expected: 4 \n'+ 'output:'+findMaxSubArray(arr2));
