const caseOne = 'ab1231da';
const caseTwo = 'weds3h5h38j3';
const caseThree = 'ijij3ij5ij2iij8';

//Utility Functions:------------------------------------------

const digitExtractor = (stringIn)=>{
    let res = [];
    let numbers = stringIn.split("").filter(Number);
    for(let i = 0; i < numbers.length; i++){
       res.push(parseInt(numbers[i]));
    }
    return res;   
}

const sumArray = (array)=>{
    let sum = 0;
    for(let i=0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

const handleErrors=(T, stringIn)=>{
    if(T <= 0 || T >=1000){
        return console.error(T+' Test case range outside of boundaries: 1 ≤ T ≤ 1000');;
    }
    if(stringIn.length > 10000){
        return console.error(stringIn+' String is too long: Cannot be > 10000 characters.');;
    }
}

//Main logic:-------------------------------------------
const sumDigits = (T, stringIn)=>{
   handleErrors(T,stringIn);
   let digits = digitExtractor(stringIn);
   let sum = sumArray(digits);
   return sum;
}

console.log(sumDigits(1, caseOne)); //Pass ~ 7
console.log(sumDigits(1, caseTwo));//Pass ~ 22
console.log(sumDigits(1, caseThree)); // Pass ~ 18
console.log(sumDigits(-1, caseThree)); // Pass ~ Throws our error