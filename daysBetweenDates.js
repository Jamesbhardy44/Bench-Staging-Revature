const _MsPerDay = 1000 * 60 * 60 * 24;

//Test variables
const test1ParamStart = "June 14, 2019"; 
const test1ParamEnd = "June 20, 2019";

const test2ParamStart = "December 29, 2018";
const test2ParamEnd = "January 1, 2019";

const test3ParamStart = "July 20, 2019"; 
const test3ParamEnd = "July 30, 2019";

const getDaysDifference =(startDateStr, endDateStr)=>{
    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);
    let DateDiff = startDate.getTime() - endDate.getTime();

    let dayDiff = parseInt(Math.abs(DateDiff / (_MsPerDay)));
    return dayDiff
}

console.log('case 1 : '+getDaysDifference(test1ParamStart,test1ParamEnd)); // 6
console.log('case 2 : '+getDaysDifference(test2ParamStart,test2ParamEnd)); // 3
console.log('case 3 : '+getDaysDifference(test3ParamStart,test3ParamEnd)); // 10


/*
Create a function that takes two dates and returns the number of days between 
the first and second date.


Examples:

getDays(

  new Date("June 14, 2019"),

  new Date("June 20, 2019")

) ➞ 6


getDays(

  new Date("December 29, 2018"),

  new Date("January 1, 2019")

) ➞ 3

// Dates may not all be in the same month/year.


getDays(

  new Date("July 20, 2019"),

  new Date("July 30, 2019")

) ➞ 10
*/
