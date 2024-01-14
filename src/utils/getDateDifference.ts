interface DateDifference {
    fromDate: string;
    toDate: string;
    differenceDays: number;
    differenceFromJan1: number;
}

// utility function to find the difference between two dates (also handling null cases), 
// and difference in days (for card width), and difference from Jan 1 (for card left margin)
export function getDateDifference(dateFrom: number | null, dateTo: number | null): DateDifference | null {
    
    // returns null if both are null
    if (dateFrom === null && dateTo === null) {
        return null; 
    }

    const currentDate = new Date(); 

    // if any (fromDate or toDate is null), then conside the date to be current date
    let fromDate = dateFrom !== null ? new Date(dateFrom * 1000) : currentDate; 
    let toDate = dateTo !== null ? new Date(dateTo * 1000) : currentDate; 

    // if start date is null, set it to January 1st of the same year
    if (dateFrom === null) {
        fromDate = new Date(currentDate.getFullYear(), 0, 1);
    }

    // if end date is null, set it to December 31st of the same year
    if (dateTo === null) {
        toDate = new Date(currentDate.getFullYear(), 11, 31);
    }

    // calculate the difference is date in order to set the scheduler card width ratio 
    const differenceInMs = toDate.getTime() - fromDate.getTime();
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    // calculate the difference from January 1st of the year of fromDate 
    // in order to make the scheduler card left margin ratio for positioning
    const jan1 = new Date(fromDate.getFullYear(), 0, 1);
    const differenceFromJan1 = (fromDate.getTime() - jan1.getTime()) / (1000 * 60 * 60 * 24);

    return {
        fromDate: fromDate.toDateString(),
        toDate: toDate.toDateString(),
        differenceDays: differenceInDays,
        differenceFromJan1: Math.round(differenceFromJan1 * 100) / 100
    };
}
