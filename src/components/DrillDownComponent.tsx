import { useSelector } from "react-redux";
import PrintIcon from "../assets/svg/PrintIcon.svg"
import '../styles/drillDownComponent.css'
import { useState, useEffect } from 'react'
import { Iprops } from "../utils/getMonthsAndDays";
import { RootState } from "../redux/store";
import { nanoid } from "nanoid";
import { GroupedRecommendationByTargetIdType } from "../redux/sliceType";
import { SchedulerCard } from "./SchedulerCard";
import { DrillDownCard } from "./DrillDownCard";
import { getDateDifference } from "../utils/getDateDifference";
import { getDaysInBetween } from "../utils/getDaysInBetween";
import { useNavigate } from "react-router";
export function DrillDownComponent() {
    const capturedValue: any = sessionStorage.getItem("recommendation");
    const [result, setResult] = useState({});
    const [janYear, setJanYear] = useState(2024)
    const [oldestDate, setOldestDate] = useState('')
    const [latestDate, setLatestDate] = useState('')
    const [recommendation, setRecommendation] = useState<any[]>([])
    const [daysInBetween, setDaysInBetween] = useState<any>(15)
    const { targetIdForDetailedView, recommendations } = useSelector((state: RootState) => state.userRecommendations)

    const CreateArrayWithLengthAndValue = (length: number) => {
        return Array.from({ length }, (_, index) => index + 1);
    };

    const navigate = useNavigate()

    const handleRecommendationNavigation = () => {
        navigate(`/recomendations`)
    }

    useEffect(() => {
        if (targetIdForDetailedView && recommendations) {
            // setIntervention(recommendations)
            const id: any = targetIdForDetailedView


            sessionStorage.setItem('recommendation', JSON.stringify(recommendations?.[id]))
            const capturedValue = sessionStorage.getItem("recommendation")
            
            if (capturedValue) {
                // console.log("captured", JSON.parse(capturedValue))
                setRecommendation(JSON.parse(capturedValue))
            }
            const allFromDates = recommendations?.[id].map((item: any) =>
                (new Date(item.dateFrom)),
            );
            const allToDates = recommendations?.[id].map((item: any) =>
                (new Date(item.dateTo)),
            );

            // Flatten the array of date ranges
            const flattenedFromDates = allFromDates.flat().filter((date: any) => date).reduce((min: any, currentDate: any) => (currentDate < min ? currentDate : min), allFromDates[0]);
            flattenedFromDates.setMonth(flattenedFromDates.getMonth() + 1)
            const flattenedToDates = allToDates.flat().filter((date: any) => date).reduce((min: any, currentDate: any) => (currentDate < min ? currentDate : min), allToDates[0]);
            flattenedToDates.setMonth(flattenedToDates.getMonth() + 1)
     
            setOldestDate(flattenedFromDates.getDate().toLocaleString().padStart(2, 0) + "/" + flattenedFromDates.getMonth().toLocaleString().padStart(2, 0) + "/" + flattenedFromDates.getFullYear())
            setLatestDate(flattenedToDates.getDate().toLocaleString().padStart(2, 0) + "/" + flattenedToDates.getMonth().toLocaleString().padStart(2, 0) + "/" + flattenedToDates.getFullYear())
            // setLatestDate(Math.max(...flattenedToDates).toLocaleString())

            // console.log(flattenedFromDates.getDate() + "/" + flattenedFromDates.getMonth().toLocaleString().padStart(2, 0) + "/" + allFromDates, flattenedToDates.getDate().toLocaleString().padStart(2, 0) + "/" + flattenedToDates.getMonth().toLocaleString().padStart(2, 0) + "/" + flattenedToDates.getFullYear())
        }

    }, []);
    useEffect(() => {

        const getMonthsAndDays = (recommendation: any) => {
            const newResult: any = {};
            // console.log(recommendation)
            recommendation.forEach(({ dateFrom, dateTo }: { dateFrom: string, dateTo: string }) => {

                const [startDay, startMonth, startYear] = dateFrom.split('/').map(Number);
                const [endDay, endMonth, endYear] = dateTo.split('/').map(Number);

                let start = new Date(startYear, startMonth - 1, startDay);
                let end = new Date(endYear, endMonth - 1, endDay);

                while (start <= end) {
                    const monthKey = `${start.getMonth() + 1}/${start.getFullYear()}`;
                    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);
                    const daysInMonth = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();

                    if (monthKey[0] === '1') {
                        setJanYear(start.getFullYear())
                    }
                    if (!newResult[monthKey]) {
                        newResult[monthKey] = { days: 0, monthName };
                    }


                    newResult[monthKey].days = (daysInMonth);

                    start.setMonth(start.getMonth() + 1);
                    start.setDate(1);
                }
            });

            setResult(newResult);
        };
        getMonthsAndDays(recommendation);
    }, [recommendation])
    //   console.log(Object.values(result))
    // console.log(CreateArrayWithLengthAndValue(31))
    useEffect(() => {
        const capturedValue: any = sessionStorage.getItem("recommendation");
        if (capturedValue && capturedValue.length > 0) {
            const parsedRecommendation = JSON.parse(capturedValue);

            const transformedRecommendation = parsedRecommendation.map((item: any) => {
                const currDateFrom = new Date(item?.dateFrom * 1000);
                const currDateTo = new Date(item?.dateTo * 1000);
                currDateFrom.setMonth(currDateFrom.getMonth() + 1);
                currDateTo.setMonth(currDateTo.getMonth() + 1);
                return {
                    ...item,
                    dateFrom: currDateFrom.getDate() + '/' + currDateFrom.getMonth() + '/' + currDateFrom.getFullYear(),
                    dateTo: currDateTo.getDate() + '/' + currDateTo.getMonth() + '/' + currDateTo.getFullYear(),
                }
            });

            // console.log("Transformed Recommendation", transformedRecommendation);
            const daysDifferenceOrNull = getDaysInBetween(recommendation[0]?.dateFrom, recommendation[0]?.dateTo);

            // If daysDifferenceOrNull is null, set a default value (0 in this case)
            const days = daysDifferenceOrNull ?? 0;

            setDaysInBetween(days?.numDays)
          
            if (transformedRecommendation) {
               
                setRecommendation(transformedRecommendation);
            }
        } else {
            console.error("No valid recommendation found");
        }
    }, [])
    useEffect(()=>{
        // console.log(recommendation)
         // console.log("Transformed Recommendation", transformedRecommendation);
         const daysDifferenceOrNull = getDaysInBetween(recommendation[0]?.dateFrom, recommendation[0]?.dateTo);

         // If daysDifferenceOrNull is null, set a default value (0 in this case)
         const days = daysDifferenceOrNull ?? 0;

         setDaysInBetween(days?.numDays)
    },[recommendation])

    return (
        <div className="drill-down-container">
            <div className="drill-down-title">
                <div className="drill-down-breadcrum">
                    <div>
                        <span onClick={handleRecommendationNavigation} className="recommendations-route">Recommendations</span>
                        <span> / </span>
                        <span>    {recommendation[0]?.targetName}</span>
                    </div>


                </div>
                <div className="drill-down-treatment">
                    <div>
                        <span>
                            {recommendation[0]?.targetName}
                        </span>
                        <span>

                            • {oldestDate ? recommendation[0]?.dateFrom : ' 2021/12/2021'} - {latestDate ? recommendation[0]?.dateTo : '2022/03/31'}
                        </span>
                    </div>

                    <div className="print-btn">
                        <img src={PrintIcon} className="print-icon" alt="" />
                        <div>Print</div>
                    </div>
                </div>
            </div>
            <div className="drill-down-body">

                <div className="drill-down-tabs">
                    <div >
                        <span className="drill-down-tab active">
                            Full period
                        </span>
                        <span className="drill-down-tab">
                            Today
                        </span>
                    </div>
                    <div className="drill-down-showlist">
                        Show as a list
                    </div>
                </div>
                <div className="drill-down-fullperiod">
                    <div className="drill-drop-timeperiod" style={{ width: "7.5%" }}>
                        <div className="drill-timePeriod-header">

                        </div>
                        <div className="drill-timePeriod-morning">
                            <div className="header-col-left">
                                Morning
                            </div>
                            <div className="header-col-right">
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", paddingTop: "3px" }}>
                                    Before meal
                                </div>
                                <div style={{ height: "50%", paddingTop: "3px" }}>
                                    After meal
                                </div>
                            </div>
                        </div>
                        <div className="drill-timePeriod-day">
                            <div className="header-col-left">
                                Day
                            </div>
                            <div className="header-col-right">
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", paddingTop: "3px" }}>
                                    Before meal
                                </div>
                                <div style={{ height: "50%", paddingTop: "3px" }}>
                                    After meal
                                </div>
                            </div>
                        </div>
                        <div className="drill-timePeriod-evening">
                            <div className="header-col-left">
                                Evening
                            </div>
                            <div className="header-col-right">
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", paddingTop: "3px" }}>
                                    Before meal
                                </div>
                                <div style={{ height: "50%", paddingTop: "3px" }}>
                                    After meal
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="drill-drop-year">
                        {Object.values(result)?.map((item: any, index: number) => {
                            const { days, monthName } = item
                            return (<div key={nanoid()}>

                                <div className="drill-timePeriod-header">
                                    <div className="drill-year-name">
                                        {(monthName === 'January' ? janYear : ' ') + " " + monthName}
                                    </div>
                                    <div className="drill-year-date">
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%` }}>
                                            {item % 2 !== 0 ? item : ''}
                                        </div>))}
                                    </div>

                                </div>
                                <div className="drill-timePeriod-morning" style={{ padding: "0px", flexDirection: "column" }}>

                                    <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days - 1) ? '1px solid #CBD4EB' : ''}` }}>

                                        </div>))}
                                    </div>
                                    <div style={{ height: "50%", display: "flex" }}>
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days - 1) ? '1px solid #CBD4EB' : ''}` }}>

                                        </div>))}
                                    </div>
                                    {/* {index===0?( <div className="intervention-body" style={{ height: `32px` ,width:`${getDateDifference(recommendation[0].dateFrom,recommendation[0].dateTo)}` }}> */}
                                    {index === 0   ? (<div className="intervention-body" style={{ height: `32px`, width: `${(days * 100 * 1.16) / daysInBetween}%` }}>


                                        <DrillDownCard
                                            recommendationName={recommendation[0]?.interventionName}
                                            fromDate={recommendation[0]?.fromDate}
                                            toDate={recommendation[0]?.toDate}
                                        />


                                    </div>) : null}
                                </div>
                                <div className="drill-timePeriod-day" style={{ padding: "0px", flexDirection: "column" }}>
                                    <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days - 1) ? '1px solid #CBD4EB' : ''}` }}>

                                        </div>))}
                                    </div>
                                    <div style={{ height: "50%", display: "flex" }}>
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days - 1) ? '1px solid #CBD4EB' : ''}` }}>

                                        </div>))}
                                    </div>
                                    {index === 0 && recommendation[0]?.timeline?.includes("AFTERNOON") ? (<div className="intervention-body" style={{ height: `32px`, width: `${(days * 100 * 1.16) / daysInBetween}%` }}>


                                        <DrillDownCard
                                               recommendationName={recommendation[0]?.interventionName}
                                            fromDate={recommendation[0]?.fromDate}
                                            toDate={recommendation[0]?.toDate}
                                        />


                                    </div>) : null}
                                </div>
                                <div className="drill-timePeriod-evening" style={{ padding: "0px", flexDirection: "column" }}>
                                    <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days - 1) ? '1px solid #CBD4EB' : ''}` }}>

                                        </div>))}
                                    </div>
                                    <div style={{ height: "50%", display: "flex" }}>
                                        {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div key={nanoid()} style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days - 1) ? '1px solid #CBD4EB' : ''}` }}>

                                        </div>))}
                                    </div>
                                    {index === 0 && recommendation[0]?.timeline?.includes("EVENING") ? (<div className="intervention-body" style={{ height: `32px`, width: `${(days * 100 * 1.16) / daysInBetween}%` }}>


                                        <DrillDownCard
                                                  recommendationName={recommendation[0]?.interventionName}
                                            fromDate={recommendation[0]?.fromDate}
                                            toDate={recommendation[0]?.toDate}
                                        />


                                    </div>) : null}
                                </div>

                            </div>)
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}