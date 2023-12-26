interface DateDifference {
    fromDate: string;
    toDate: string;
    differenceDays: number;
    differenceFromJan1: number;
}

export function getDateDifference(dateFrom: number | null, dateTo: number | null): DateDifference | null {
    if (dateFrom === null && dateTo === null) {
        return null; // Both inputs are null, cannot calculate the difference
    }

    const now = new Date(); // Current date

    let fromDate = dateFrom !== null ? new Date(dateFrom * 1000) : now; // Convert Unix timestamp to milliseconds
    let toDate = dateTo !== null ? new Date(dateTo * 1000) : now; // Convert Unix timestamp to milliseconds

    // If start date is null, set it to January 1st of the same year
    if (dateFrom === null) {
        fromDate = new Date(now.getFullYear(), 0, 1);
    }

    // If end date is null, set it to December 31st of the same year
    if (dateTo === null) {
        toDate = new Date(now.getFullYear(), 11, 31);
    }

    const differenceInMs = toDate.getTime() - fromDate.getTime();
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    // Calculate the difference from January 1st of the year of fromDate
    const jan1 = new Date(fromDate.getFullYear(), 0, 1);
    const differenceFromJan1 = (fromDate.getTime() - jan1.getTime()) / (1000 * 60 * 60 * 24);

    return {
        fromDate: fromDate.toDateString(),
        toDate: toDate.toDateString(),
        differenceDays: differenceInDays,
        differenceFromJan1: Math.round(differenceFromJan1 * 100) / 100
    };
}
