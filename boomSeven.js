/*
revature coding challenge: 08/03/2022:

Create a function 
that takes an array of numbers 
and returns "Boom!" 
if the digit 7 appears in the array.
 Otherwise, return "there is no 7 in the array".
*/

//should return 'BOOM!' - PASSED
const posTestArray =[1,3,5,7]

//should return 'there is no 7 in the array' -- PASSED
const negTestArray = [1,2,3,4, 8,  4, 3,  2, 1, 4]

//should return 'BOOM!' -- PASSED
const edgeCaseArray = [27, 87, 107]

function sevenBoom(arr){
    let pMsg = 'BOOM!'
    let nMsg = 'there is no 7 in the array'
    let strArr  = arr.toString()

    //loop through string object and look for 7:
    //return pos if found:
    
    for(let i = 0; i < arr.length; i++){
        if(strArr[i].match(7)){
            return pMsg;
        }
    }
    //return neg if array does not have a 7:
    if(!arr.includes(7)){
        return nMsg
    }
   
    return pMsg
    
}

sevenBoom(posTestArray) // should return BOOM! --GOOD

sevenBoom(negTestArray) //should return neg -- GOOD

sevenBoom(edgeCaseArray) //should return BOOM! -- GOOD

//logging return values: ALL PASSED.
console.log(sevenBoom(posTestArray))//--pass
console.log(sevenBoom(negTestArray))//--pass
console.log(sevenBoom(edgeCaseArray))//pass