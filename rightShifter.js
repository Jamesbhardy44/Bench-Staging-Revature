/*
Write a function that mimics (without the use of >>)
 the right shift operator and returns the result 
 from the two given integers.
    a     b          a/2^b 
  80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
*/
const rightShifter = (a,b)=>{
let c  = 2**b
let res  = Math.floor(a/c) 
return  res
}
function testRightShifter(){
  console.log(rightShifter(80,3))   //-should be: 10
  console.log(rightShifter(-24,2))  //-should be: -6
  console.log(rightShifter(-5,1))   //-should be:-3
}
testRightShifter() // ALL TEST  CASES PASSED

