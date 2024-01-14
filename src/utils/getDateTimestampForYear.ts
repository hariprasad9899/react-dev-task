
interface TimeStampForYear {
    startTimestamp:number
    endTimestamp:number
}

// utility function to find the UNIX timestamp of a particular year
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