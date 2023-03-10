
/*
Write a function 
that takes a string as input
 and returns 
 a new string 
 with the first letter 
 of each word capitalized
*/

function capitalizeString(strInP){
    console.log(strInP);
    if(!strInP){
        throw new Error('error');
    }
    var strIn = [];
    console.log('capitalizing.......');
    for(var i = 0; i < strInP.length; i++){
        var el = strInP[i];
        if(i==0 ||strInP[i-1]==' '||strInP[i-1]==''){
            strIn[i]=el.toUpperCase();
        }
        else{
            strIn[i]=el;
        }
    }
    return strIn.join("");
}
try{
    console.log(capitalizeString(
        "the quick brown fox jumps over the lazy dog"));
}
catch(e){
    console.error(e);
}