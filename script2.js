/*
Given an array of integers, 
write a function that returns the maximum product 
that can be obtained by 
multiplying any three integers in the array.

**sort in ascending order and multiply 3 highest together

*/
var testArr = [5,2,5,-6,7,4];

//IIFE
function getMaxProduct(array){
    if(array.length<3){
        throw new Error('array is too short!');
    }
    var res = array.slice();
    res.sort(function compareInts(a,b){
        return b-a;
    });
    var lastEl = res[res.length-1];
    var penultimateEl = res[res.length-2];
    var thirdLastEl = res[res.length-3];
    var firstMaxProduct = lastEl * penultimateEl;
    var secondMaxProduct= firstMaxProduct * thirdLastEl;
    var result = secondMaxProduct;
    return result + ' is the maximum product of this array.';
};

try{
    
    console.log(getMaxProduct(testArr));
}
catch(error){
    console.error(error.message);
}
