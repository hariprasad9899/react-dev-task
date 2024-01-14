
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
    const januaryFirst = new Date(`${year}-01-01T00:00:00Z`);
    const januaryFirstTimestamp = Math.floor(januaryFirst.getTime() / 1000);

    // December 31st, YYYY 23:59:59 UTC
    const decemberThirtyFirst = new Date(`${year}-12-31T23:59:59Z`);
    const decemberThirtyFirstTimestamp = Math.floor(decemberThirtyFirst.getTime() / 1000);

    return {
      startTimestamp: januaryFirstTimestamp,
      endTimestamp: decemberThirtyFirstTimestamp
    };
}