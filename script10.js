function _stripNegatives(array){
 var tmp = [];
 for(var i =0; i<array.length;i++){
    if(array[i]%2===0){
        tmp.push(array[i]);
    }
 }
 return tmp;
}

function getSumEvens(array){
    if(array.length < 2){
        throw new Error('Invalid Length');
    }
    var sum = 0;
    var posArr = _stripNegatives(array);
    for(var i = 0; i < posArr.length; i++){
        sum += posArr[i];
    }
    return sum;
}

try{
    console.log(getSumEvens([3, 7, 5, 2, 8, 4]));
}
catch(e){
    console.error(e,e.stack);
}