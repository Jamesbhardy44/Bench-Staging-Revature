//utility functions:--------------------------------------------------
const addArray = (array)=>{
    let sum = 0;
    for(let i = 0;i < array.length; i++){
        sum += array[i]; 
    }
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
//END UTILITY FUNCTIONS-----------------------------------------------

//MAIN LOGIC:
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
console.log('================')
console.log('Case 43: '+evenOrOddish(43)); 
console.log('================')
console.log('Case 373: '+evenOrOddish(373));
console.log('================') 
console.log('Case 4433: '+evenOrOddish(4433)); 
console.log('================')

