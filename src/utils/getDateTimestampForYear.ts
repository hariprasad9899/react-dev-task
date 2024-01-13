
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
    const firstDayOfYear = new Date(`${year}-01-01T00:00:00Z`);
    const startTimestamp = Math.floor(firstDayOfYear.getTime() / 1000);

    const lastDayOfYear = new Date(`${year}-12-31T23:59:59Z`);
    const endTimestamp = Math.floor(lastDayOfYear.getTime() / 1000);

    return {
      startTimestamp,
      endTimestamp
    };
}