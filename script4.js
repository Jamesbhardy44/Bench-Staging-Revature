function generateProductArray(array) {
    if (array.length < 2) {
        throw new Error('Array is too small!');
    }
    
    var res = [];
    var product = 1;
    
    // Calculate product of all elements in the input array
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }
    
    // Calculate the result for each element by dividing the total product by the current element
    for (var i = 0; i < array.length; i++) {
        res[i] = product / array[i];
    }
    
    return res;
}

console.log(generateProductArray([1,2,3,4]));