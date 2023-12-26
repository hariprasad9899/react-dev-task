import { getDateDifference } from "../utils/getDateDifference";
interface SchedulerCardType {
    fromDate: number,
    toDate: number,
    cardIndex: number
}

export function SchedulerCard({ fromDate, toDate, cardIndex }: SchedulerCardType) {
    const dateInfoObj = getDateDifference(fromDate, toDate);
    console.log(dateInfoObj);

    if (!dateInfoObj) {
        return null;
    }

    const noOfDays = dateInfoObj.differenceDays;
    const startsFrom = dateInfoObj.differenceFromJan1;

    if (noOfDays === undefined || startsFrom === undefined) {
        return null;
    }

    const widthPercentage = noOfDays * 0.2777;
    const leftPercentage = startsFrom * 0.2777;
    const topPercentage = cardIndex * 6;

    const bgColors = ["#2559D6","#DE769C","#03ADB8","#70B273"]

    return (
        <div className="scheduler-card" 
            style={{ 
                width: `${widthPercentage}%`, 
                left: `${leftPercentage}%`, 
                top: `${topPercentage}rem`,
                backgroundColor: `${bgColors[cardIndex % bgColors.length]}`
            }}>
            <button className="btn detailed-view-btn">Detailed View</button>
        </div>
    );
}
