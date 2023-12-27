export function getDateTimestampForYear(year:number) {
    const startDate = new Date(year, 0, 1); // January 1st
    const endDate = new Date(year, 11, 31); // December 31st

    const startTimestamp = Math.floor(startDate.getTime() / 1000); // Convert milliseconds to seconds (Unix timestamp)
    const endTimestamp = Math.floor(endDate.getTime() / 1000); // Convert milliseconds to seconds (Unix timestamp)

    return {
        startTimestamp,
        endTimestamp
    };
}