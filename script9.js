//SEE script11.js

function capitalizeWords(str){
   for(var i =0; i <str.length; i++){
    if(str[i]==0 || str[i-1]==' '){
        str[i]=str[i].toUpperCase();
    }
    else{
        continue;
    }
   }
   return str;
}

console.log(capitalizeWords('poop in a bucket'));