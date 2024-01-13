import "../styles/schedulerComponent.css"
import AddIconBlue from "../assets/svg/AddIconBlue.svg"
import { YearSelector } from "./YearSelector"
import { useEffect } from "react"
import { SchedulerCard } from "./SchedulerCard"
import PrintIcon from "../assets/svg/PrintIcon.svg"
import { getDateTimestampForYear } from "../utils/getDateTimestampForYear"
import { getUserRecomendation } from "../services/getUserRecomendation"
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { incrementTargetYear, decrementTargetYear } from "../redux/slice/userRecommendationSlice"

export function SchedulerComponent() {
    
    const {recommendations, targetYear, isLoading, isEmpty , targetIdSet } = useSelector((state:RootState) => state.userRecommendations)

    const dispatch = useDispatch()

    const handleTargetYearIncrement = () => {
        dispatch(incrementTargetYear())
    }

    const handleTargetYearDecrement = () => {
        dispatch(decrementTargetYear())
    }

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
                    <div className="no-recommendations">
                        <div className="no-recommendations-content">
                            <h5>There is no recomendations</h5>
                            <button className="btn btn-primary add-recommendation-btn">Add Recommendations</button>
                        </div>
                    </div> 
                    : 

                    <div className="scheduler-body" style={{height: `${recommendations.length * 7.5}rem`}}>
                        <div className="calendar-month">Jan</div>
                        <div className="calendar-month">Feb</div>
                        <div className="calendar-month">Mar</div>
                        <div className="calendar-month">Apr</div>
                        <div className="calendar-month">May</div>
                        <div className="calendar-month">Jun</div>
                        <div className="calendar-month">Jul</div>
                        <div className="calendar-month">Aug</div>
                        <div className="calendar-month">Sep</div>
                        <div className="calendar-month">Oct</div>
                        <div className="calendar-month">Nov</div>
                        <div className="calendar-month">Dec</div>
                        {
                            targetIdSet.length > 0 && targetIdSet.map((targetIndex:any,index:number) => {
                                const interventionData = recommendations[targetIndex][0]
                                return (
                                    <SchedulerCard 
                                        fromDate={interventionData?.["dateFrom"]} 
                                        key={nanoid()} 
                                        toDate={interventionData?.["dateTo"]} 
                                        cardIndex={index+1} 
                                        cardName={interventionData?.["targetName"]}
                                        targetedId={interventionData?.["targetId"]}
                                    />
                                )
                            })
                        }

                        {
                            isLoading ? 
                            <div className="recommendation-loader">
                                <div className="spinner-border text-primary">
                                    <span className="visually-hidden">Loading...</span>
                                </div> 
                            </div>
                            : 
                            null
                        }

                    </div>

                }   
                
               
                

            </div>
        </div>
        
    )

}