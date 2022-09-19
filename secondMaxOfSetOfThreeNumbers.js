//James Hardy 09/19/2022

const caseOne = [3,1,2,3, 10, 15, 5, 100, 999, 500];


//Utility Functions:------------------------------------------------------------

const sliceInput =(arr, desiredSize)=>{
    const res = [];
    for (let i = 1; i < arr.length; i += desiredSize) {
        const el = arr.slice(i, i + desiredSize);
        res.push(el);
    }
    return res;
}

const seperateArrayIntoThree = (array)=>{
    let arr0 = [];
    let arr1 = []; 
    let arr2 = [];
    let twoDimensionalArray = sliceInput(array, 3);
       arr0 = twoDimensionalArray[0];
       arr1 = twoDimensionalArray[1];
       arr2 = twoDimensionalArray[2];
       const res = {
        arr0,
        arr1,
        arr2
    }
    return res;
}

const handleErrors = (n, array)=>{
    let errorMsgN = 'error: out of range: 1<= n <= 6 ' + n;
    let errorMsgEveryInt = 'error: element > 10,000 not allowed.'
    if(n >=6 || n <=1){
        return errorMsgN
    }
    for(let i = 0; i < array.length; i++){
        if(array[i]> 10,000){
            return errorMsgEveryInt + 'element: '+ array[i];
        }
    }
    return 'no errors found with given value for n and array';
}

//MAIN LOGIC:-------------------------------------------------------------------
const secondMaxOfSetOfThreeNumbers = (array)=>{
    const n = array[0];
    handleErrors(n, array);
    let res = seperateArrayIntoThree(array);
    //maxes:
    maxZero = Math.max(...res.arr0);
    maxOne = Math.max(...res.arr1);
    maxTwo = Math.max(...res.arr2);

    //indexes of maxes:
    let maxZeroIndex = res.arr0.indexOf(maxZero);
    let maxOneIndex = res.arr1.indexOf(maxOne);
    let maxTwoIndex = res.arr2.indexOf(maxTwo);

    //store removed element [maxes] in object for printing input later
    const temp = {};
    temp.removedFromZero = res.arr0.splice(maxZeroIndex, 1);
    temp.removedFromOne = res.arr1.splice(maxOneIndex, 1);
    temp.removedFromTwo = res.arr2.splice(maxTwoIndex, 1);

    //secondMax: *
    let secondMaxZero = Math.max(...res.arr0);
    let secondMaxOne = Math.max(...res.arr1);
    let secondMaxTwo = Math.max(...res.arr2);
    
    let inputSummaryString ='Input: '+ n + '\n'+res.arr0 +","+ temp.removedFromZero+ '\n' + res.arr1 +","+ temp.removedFromOne+ 
    '\n' + res.arr2 + "," + temp.removedFromTwo;

    let outPutSummaryString = '\n'+ 'Output: \n'+ secondMaxZero + '\n' + secondMaxOne + '\n' + secondMaxTwo; 

    let returningString = inputSummaryString + '\n-----------------------'+outPutSummaryString;
    return returningString;
}

console.log(secondMaxOfSetOfThreeNumbers(caseOne)); // PASS

/*
Sample Input
3
1 2 3
10 15 5
100 999 500

Sample Output
2
10
500

Problem Statement
Write a program that accepts sets of three numbers and prints the second-maximum number among the three.
Input
First line contains the number of triples, N.
The next N lines which follow each have three space separated integers.
Output
For each of the N triples, output one new line which contains the second-maximum integer among the three
Constraints
1 ≤ N ≤ 6
1 ≤ every integer ≤ 10000
The three integers in a single triplet are all distinct. That is, no two of them are equal.

*/ 

