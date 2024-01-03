
interface TimeStampForYear {
    startTimestamp:number
    endTimestamp:number
}
/**
 * 
 * @param year - year, which need to be converted to start and end timestamp
 * @returns {TimeStampForYear} - Object, that constains time stamp for Start and end
 */
export function getDateTimestampForYear(year:number) : TimeStampForYear {
    const startDate = new Date(year, 0, 1); // January 1st
    const endDate = new Date(year, 11, 31); // December 31st

    const startTimestamp = Math.floor(startDate.getTime() / 1000); // Convert milliseconds to seconds (Unix timestamp)
    const endTimestamp = Math.floor(endDate.getTime() / 1000); // Convert milliseconds to seconds (Unix timestamp)

    return {
        startTimestamp,
        endTimestamp
    };
}