
const doubleSwap=(fullInputString, param1, param2)=>{
  let splitString =  fullInputString.split('');
  for(let i = 0; i < splitString.length; i++){
        if(splitString[i]===param1){
            splitString[i]= param2;
            continue;
        }
        if(splitString[i]===param2){
            splitString[i]= param1;
        }
  }
  return splitString;
}

console.log(doubleSwap("aabbccc", "a", "b"));
//➞ "bbaaccc"
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
//➞ "random w&rds writt#n h#r#"
console.log(doubleSwap("128 895 556 788 999", "8", "9"));
//➞ "129 985 556 799 888"
console.log(doubleSwap("I was going to replace this with that", "t", "%"));

/*
b) Write a function to replace 
all instances of character c1 with character c2 
and vice versa.

Examples:
doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"

doubleSwap("128 895 556 788 999", "8", "9")
➞ "129 985 556 799 888"

Notes:
Both characters will show up at least once in the string.
*/