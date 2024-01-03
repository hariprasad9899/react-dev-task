import "../styles/schedulerComponent.css"
import AddIconBlue from "../assets/svg/AddIconBlue.svg"
import { YearSelector } from "./YearSelector"
import { useEffect, useState } from "react"
import { SchedulerCard } from "./SchedulerCard"
import PrintIcon from "../assets/svg/PrintIcon.svg"
import { getDateTimestampForYear } from "../utils/getDateTimestampForYear"
import { getUserRecomendation } from "../services/getUserRecomendation"

export function SchedulerComponent() {
    
    // state to iterate the years to see the recomendations
    const [recomendationYear, setRecomendationYear] = useState<number>(2020)

    // state to store the api response for particula recomended year
    const [userRecomendations, setUserRecomendations] = useState<any>([])

    const incrementRecomendationYear = () => {
        setRecomendationYear((t) => t + 1)
    }

    const decrementRecomendationYear = () => {
        setRecomendationYear((t) => t - 1)
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

        const apiData = async (timestampOfYear:any) => {
            console.log();
            
            try {
                const apiRes = await getUserRecomendation(timestampOfYear.startTimestamp,timestampOfYear.endTimestamp)
                console.log(apiRes);
                const { userRecommendations } = apiRes
                setUserRecomendations(userRecommendations)
            } catch(err) {
                console.log(err);
            }
        }
        // gettings the timstamp from Jan 1 - Dec 31 for the recomended year using utility function
        const timestampOfYear = getDateTimestampForYear(recomendationYear)

        // make a get request to get the recomendations for the selected year
        apiData(timestampOfYear) 

    },[recomendationYear])
    
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
                            currentYearValue={recomendationYear} 
                            decrementYear={decrementRecomendationYear} 
                            incrementYear={incrementRecomendationYear}
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
                        mockApiData.length > 0 && mockApiData.map((apiData,index) => {
                            return (
                                <SchedulerCard fromDate={apiData?.["dateFrom"]} toDate={apiData?.["dateTo"]} cardIndex={index+1} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
        
    )

}