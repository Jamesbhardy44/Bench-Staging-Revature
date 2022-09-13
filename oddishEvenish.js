/*
a) Create a function that determines whether a number is Oddish or Evenish. 
A number is Oddish if the sum of all of its digits is odd, 
and a number is Evenish if the sum of all of its digits is even. 

If a number is Oddish, return "Oddish". 
Otherwise, return "Evenish".

For example,

oddishOrEvenish(121) should return 
"Evenish", 

since 1 + 2 + 1 = 4 

oddishOrEvenish(41) should return 
"Oddish", 

since 4 + 1 = 5.

Examples:
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

*/



// take param, split into individual numbers.

//add them

// if % 2 == 0 [even]   if % 2== 1 [odd] 

const addArray = (array)=>{
    let sum = 0;
    for(let i = 0;i < array.length; i++){
        
        sum += array[i];
        
        
    }
    return sum;
}

const add = (number)=>{
    let sum = 0;
    sum += number;
    return sum;
}

const isEven = (number) =>{
    if(number % 2 === 0){
        return true;
    }
    if(number % 2 === 1){
        return false;
    }
}

const breakUpNumber = (number)=>{
    let res = [];
    let numString = number.toString().split('');
    for(let i = 0; i < numString.length; i++){
        let stringPartial = parseInt(numString[i]);
        res.push(stringPartial);
    }
    return res;
}

const evenOrOddish = (number) =>{
   const evenish = 'Evenish';
   const oddish = 'Oddish'; 
   let splitNumberArray =  breakUpNumber(number);
   let addedArray = addArray(splitNumberArray);
   if(!isEven(addedArray)){
    return oddish;
   }
   return evenish;
}


/*
oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
*/

console.log('================')
console.log('Case 43: '+evenOrOddish(43)); 
console.log('================')
console.log('Case 373: '+evenOrOddish(373));
console.log('================') 
console.log('Case 4433: '+evenOrOddish(4433)); 
console.log('================')

