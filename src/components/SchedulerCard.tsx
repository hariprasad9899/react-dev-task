import { useNavigate } from "react-router";
import { getDateDifference } from "../utils/getDateDifference";
interface SchedulerCardType {
    fromDate: number,
    toDate: number,
    cardIndex: number
}

export function SchedulerCard({ fromDate, toDate, cardIndex }: SchedulerCardType) {
    const navigate = useNavigate()
    const dateInfoObj = getDateDifference(fromDate, toDate);

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

    const handleDetailedViewClick = () => {
        navigate(`/recomendations/drilled-list`)
    }

    return (
        <div className="scheduler-card" 
            style={{ 
                width: `${widthPercentage}%`, 
                left: `${leftPercentage}%`, 
                top: `${topPercentage}rem`,
                backgroundColor: `${bgColors[cardIndex % bgColors.length]}`
            }}>
            <div>Some Title</div>
            <button className="btn detailed-view-btn" onClick={handleDetailedViewClick}>Detailed View</button>
        </div>
    );
}
