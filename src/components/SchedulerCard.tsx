import { useNavigate } from "react-router";
import { getDateDifference } from "../utils/getDateDifference";
import { CARD_BACKGROUND_COLORS, CARD_TOP_ASPECT_RATIO, CARD_WIDTH_ASPECT_RATIO } from "../data/constants";
import { storeTargetedId } from "../redux/slice/userRecommendationSlice";
import { useAppDispatch } from "../redux/store";

interface SchedulerCardType {
    fromDate: number | null,
    toDate: number | null,
    cardIndex: number,
    cardName: string,
    targetedId: number
}

// single card component to be placed inside the scheduler 
export function SchedulerCard({ fromDate, toDate, cardIndex, cardName, targetedId }: SchedulerCardType) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // getting the date difference between the two days using a utility function
    const dateInfoObj = getDateDifference(fromDate, toDate);

    // if any error in date conversion, don't render the card component
    if (!dateInfoObj) {
        return null;
    }

    // to calculate the cards width
    const noOfDays = dateInfoObj.differenceDays;

    // to calculate the cards left margin
    const startsFrom = dateInfoObj.differenceFromJan1;

    if (noOfDays === undefined || startsFrom === undefined) {
        return null;
    }

    // calculate the width, left, and top for the card placement inside the scheduler component
    const widthPercentage = Math.abs(noOfDays) * CARD_WIDTH_ASPECT_RATIO;
    const leftPercentage = startsFrom * CARD_WIDTH_ASPECT_RATIO;

    // adding top percentage in a cumulative way using index for each card component
    const topPercentage = cardIndex * CARD_TOP_ASPECT_RATIO;

    // function to navigate to details view route
    const handleDetailedViewClick = () => {
        navigate(`/recomendations/drilled-list`)
        dispatch(storeTargetedId({id: targetedId}))
    }

    // card background color to be mapped within four colors one after another 
    const backgroundColor = CARD_BACKGROUND_COLORS[cardIndex % CARD_BACKGROUND_COLORS.length]

    // if a card has very less width, add a hoverable card element.
    if(widthPercentage < 5) {
        return (
            <div className="scheduler-card hoverable-card" 
                style={{ 
                    width: `${widthPercentage % 100}%`, 
                    left: `${leftPercentage}%`, 
                    top: `${topPercentage}rem`,
                    backgroundColor: `${backgroundColor}`
                }}>
                <div className="scheduler-hover-card" 
                    style={{
                        backgroundColor: `${backgroundColor}` 
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
                backgroundColor: `${backgroundColor}`
            }}>
            <div>{cardName}</div>
            <button className="btn detailed-view-btn" onClick={handleDetailedViewClick}>Detailed View</button>
        </div>
    );
}
