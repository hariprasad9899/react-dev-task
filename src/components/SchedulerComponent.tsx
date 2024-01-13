import "../styles/schedulerComponent.css"
import AddIconBlue from "../assets/svg/AddIconBlue.svg"
import { YearSelector } from "./YearSelector"
import { useEffect, useState } from "react"
import { SchedulerCard } from "./SchedulerCard"
import PrintIcon from "../assets/svg/PrintIcon.svg"
import { getDateTimestampForYear } from "../utils/getDateTimestampForYear"
import { getUserRecomendation } from "../services/getUserRecomendation"
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { incrementTargetYear, decrementTargetYear } from "../redux/slice/userRecommendationSlice"

export function SchedulerComponent() {
    
    // state to store the api response for particula recomended year
    const [userRecomendations, setUserRecomendations] = useState<any>([])

    const {recommendations, targetYear} = useSelector((state:RootState) => state.userRecommendations)

    const dispatch = useDispatch()

    const handleTargetYearIncrement = () => {
        dispatch(incrementTargetYear())
    }

    const handleTargetYearDecrement = () => {
        dispatch(decrementTargetYear())
    }

    const mockApiData = [
        {
            "dateFrom": 1675209600,
            "dateTo": 1682812800,
        },
        {
            "dateFrom": 1651209600,
            "dateTo": 1662309800,
        },
        {
            "dateFrom": 1675209600,
            "dateTo": 1685209600,
        },
        {
            "dateFrom": 1675123600,
            "dateTo": 1696623600,
        },
        {
            "dateFrom": 1653209600,
            "dateTo": 1662309800,
        },
        {
            "dateFrom": 1675348800,
            "dateTo": 1682812800,
        },
    ];


    useEffect(() => {
        const timestampOfYear = getDateTimestampForYear(targetYear)
        const timeStampInfo = {
            start: timestampOfYear.startTimestamp,
            end: timestampOfYear.endTimestamp
        }
        dispatch(getUserRecomendation(timeStampInfo))
    },[targetYear])
    
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
                            currentYearValue={targetYear} 
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

                <div className="scheduler-body" style={{height: `${mockApiData.length * 7.5}rem`}}>
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
                        recommendations.length > 0 && recommendations.map((apiData:any,index:number) => {
                            return (
                                <SchedulerCard 
                                    fromDate={apiData?.["dateFrom"]} 
                                    key={nanoid()} 
                                    toDate={apiData?.["dateTo"]} 
                                    cardIndex={index+1} 
                                    cardName={apiData?.["targetName"]}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
        
    )

}