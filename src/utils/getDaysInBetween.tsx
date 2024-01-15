export const getDaysInBetween=(startDateStr:string|null,endDateStr:string|null)=>{
 
// const startDateStr: string = '2022-01-01';
// const endDateStr: string = '2022-01-15';

// Convert date strings to Date objects
const formattedStartDateString = startDateStr?.split('/').reverse().join('-')
const formattedendDateString = endDateStr?.split('/').reverse().join('-')
const startDate: Date = new Date(formattedStartDateString?formattedStartDateString:'2022-01-01');
const endDate: Date = new Date(formattedendDateString?formattedendDateString:'2022-01-01');

// Calculate the difference in milliseconds
const timeDifference: number = endDate.getTime() - startDate.getTime();
console.log(startDateStr,endDateStr,timeDifference)
// Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
const numDays: number = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
console.log(numDays)
return{numDays}
}