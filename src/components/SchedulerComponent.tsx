import "../styles/schedulerComponent.css"
import AddIconBlue from "../assets/svg/AddIconBlue.svg"
import { YearSelector } from "./YearSelector"
import { useEffect } from "react"
import { SchedulerCard } from "./SchedulerCard"
import PrintIcon from "../assets/svg/PrintIcon.svg"
import { getDateTimestampForYear } from "../utils/getDateTimestampForYear"
import { getUserRecomendation } from "../services/getUserRecomendation"
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../redux/store"
import { incrementTargetYear, decrementTargetYear } from "../redux/slice/userRecommendationSlice"
import { MONTHS } from "../data/constants"
import { GroupedRecommendationByTargetIdType } from "../redux/sliceType"

export function SchedulerComponent() {
    
    // getting the state of the data created using the async thunk fetched by recommendations api
    const {recommendations, targetYear, isLoading, isEmpty , targetIdSet } = useSelector((state:RootState) => state.userRecommendations)

    const dispatch = useAppDispatch()

    const handleTargetYearIncrement = () => {
        dispatch(incrementTargetYear())
    }

    const handleTargetYearDecrement = () => {
        dispatch(decrementTargetYear())
    }

    // making a new request everytime when the target year is changed 
    // target year is stored in the session to persist the target year on screen refresh
    useEffect(() => {
        sessionStorage.setItem("targetYear",targetYear.toString())
        const timestampOfYear = getDateTimestampForYear(targetYear);
        const timeStampInfo = {
            start: timestampOfYear.startTimestamp,
            end: timestampOfYear.endTimestamp,
        };
        dispatch(getUserRecomendation(timeStampInfo));
    }, [targetYear]);
    
    return (
        <div className="scheduler-container">

            <div className="scheduler-title">
                <h5>Recomendations</h5>
                <div className="print-btn">
                    <img src={PrintIcon} className="print-icon" alt="" />
                    <div>Print</div>
                </div>
            </div>

            <div className="scheduler-component shadow shadow-shadow-sm">

                <div className="scheduler-header">

                    <div className="recomendation-period">
                        <div className="label-period">Period: <span className="label-year">Year</span> </div>
                        <YearSelector 
                            currentYearValue={+targetYear} 
                            decrementYear={handleTargetYearDecrement} 
                            incrementYear={handleTargetYearIncrement}
                        />
                    </div>

                    <div className="recomendation-btn">
                        <button className='btn'>
                            <img src={AddIconBlue} alt="" />
                            Add recomendation
                        </button>
                    </div>

                </div>

                { 
                    isEmpty ? 

                        (
                            <div className="no-recommendations">
                                <div className="no-recommendations-content">
                                    <h5>There is no recomendations</h5>
                                    <button className="btn btn-primary add-recommendation-btn">Add Recommendations</button>
                                </div>
                            </div>
                        ) 

                        : 

                        (
                            <div className="scheduler-body" style={{height: `${targetIdSet.length * 7.5}rem`}}>
                                {
                                    MONTHS.map((month:string) => {
                                    return  <div className="calendar-month" key={nanoid()}>{month}</div>
                                    })
                                }
                                {
                                    targetIdSet.length > 0 && targetIdSet.map((targetIndex:number | string,index:number) => {
                                        if (typeof recommendations === 'object' && targetIndex in recommendations) {
                                            const interventionData = (recommendations as GroupedRecommendationByTargetIdType)[targetIndex as string];
                                            const singeTargetInvervention = interventionData[0]
                                            return (
                                                <SchedulerCard 
                                                    fromDate={singeTargetInvervention?.["dateFrom"]} 
                                                    key={nanoid()} 
                                                    toDate={singeTargetInvervention?.["dateTo"]} 
                                                    cardIndex={index+1} 
                                                    cardName={singeTargetInvervention?.["targetName"]}
                                                    targetedId={singeTargetInvervention?.["targetId"]}
                                                />
                                            );
                                        } else {
                                            return null
                                        }
                                    })
                                }
                                {
                                    isLoading ? 

                                    (
                                        <div className="recommendation-loader">
                                            <div className="spinner-border text-primary">
                                                <span className="visually-hidden">Loading...</span>
                                            </div> 
                                        </div>
                                    )
                                    : 

                                    null
                                }
                            </div>
                        )
                }   
            </div>
        </div>
    )
}