/*
Write a function
 that takes in an array of integers
 and returns 
 the number of unique integers in the array.

For example, 

given the input array 
[1, 2, 3, 2, 4, 3, 5, 6, 5]

the function should return 6 
because there are six unique integers in the array (1, 2, 3, 4, 5, and 6).

Your function should work for arrays of any length, 
and it should handle both positive and negative integers.
*/



function countUniqueElements(array){
    if(array.length < 2){
        throw new Error('Array is too small!');
    }
    var tmp = [];
    for(var i = 0; i < array.length-1; i++){
        if(!tmp.includes(array[i])){
            tmp.push(array[i]);
        }
        else{continue;}
    }
    return tmp.length;
}

try{
    var testArr = [1, 2, 3, 2, 4, 3, 5, 6, 5];
    console.log(countUniqueElements(testArr));
}
catch(e){
    console.error(e);
}
