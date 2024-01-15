export interface Iprops{
    startDate:string; 
    endDate:string
}

export function getMonthsAndDays(data:Iprops[]) {
    const result :any= {};
  
    data.forEach(({ startDate, endDate }:any) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      while (start <= end) {
        const monthKey = `${start.getMonth() + 1}/${start.getFullYear()}`;
        const daysInMonth = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
  
        if (!result[monthKey]) {
          result[monthKey] = 0;
        }
  
        result[monthKey] += Math.min(daysInMonth - start.getDate() + 1, end.getDate());
  
        start.setMonth(start.getMonth() + 1);
        start.setDate(1);
      }
    });
  
    return result;
  }
  
 