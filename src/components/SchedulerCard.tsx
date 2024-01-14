import { useNavigate } from "react-router";
import { getDateDifference } from "../utils/getDateDifference";
import { CARD_BACKGROUND_COLORS, CARD_TOP_ASPECT_RATIO, CARD_WIDTH_ASPECT_RATIO } from "../data/constants";
interface SchedulerCardType {
    fromDate: number,
    toDate: number,
    cardIndex: number,
    cardName: string 
}

export function SchedulerCard({ fromDate, toDate, cardIndex, cardName }: SchedulerCardType) {
    const navigate = useNavigate()

    // function to get the date difference between the two days
    const dateInfoObj = getDateDifference(fromDate, toDate);

    // if any error in date conversion, don't render the card component
    if (!dateInfoObj) {
        return null;
    }

    // get the number of days and starts from for width and left ratio
    const noOfDays = dateInfoObj.differenceDays;
    const startsFrom = dateInfoObj.differenceFromJan1;

    if (noOfDays === undefined || startsFrom === undefined) {
        return null;
    }

    // calculate the width, left, and top for the card placement inside the scheduler component
    const widthPercentage = Math.abs(noOfDays) * CARD_WIDTH_ASPECT_RATIO;
    const leftPercentage = startsFrom * CARD_WIDTH_ASPECT_RATIO;
    const topPercentage = cardIndex * CARD_TOP_ASPECT_RATIO;

    // function to navigate to details view route
    const handleDetailedViewClick = () => {
        navigate(`/recomendations/drilled-list`)
    }

    if(widthPercentage < 5) {
        return (
            <div className="scheduler-card hoverable-card" 
                style={{ 
                    width: `${widthPercentage % 100}%`, 
                    left: `${leftPercentage}%`, 
                    top: `${topPercentage}rem`,
                    backgroundColor: `${CARD_BACKGROUND_COLORS[cardIndex % CARD_BACKGROUND_COLORS.length]}`
                }}>
                <div className="scheduler-hover-card" 
                    style={{
                        backgroundColor: `${CARD_BACKGROUND_COLORS[cardIndex % CARD_BACKGROUND_COLORS.length]}` 
                    }}
                >
                    <div>{cardName}</div>
                    <button className="btn detailed-view-btn" onClick={handleDetailedViewClick}>Detailed View</button>
                </div>
            </div>
        );
    }

    return (
        <div className="scheduler-card" 
            style={{ 
                width: `${(widthPercentage % 100)}%`, 
                left: `${leftPercentage}%`, 
                top: `${topPercentage}rem`,
                backgroundColor: `${CARD_BACKGROUND_COLORS[cardIndex % CARD_BACKGROUND_COLORS.length]}`
            }}>
            <div>{cardName}</div>
            <button className="btn detailed-view-btn" onClick={handleDetailedViewClick}>Detailed View</button>
        </div>
    );
}
