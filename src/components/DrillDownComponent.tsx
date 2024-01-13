import { useSelector } from "react-redux";
import PrintIcon from "../assets/svg/PrintIcon.svg"
import '../styles/drillDownComponent.css'
import { RootState } from "../redux/store";
import { useEffect } from "react";
export function DrillDownComponent() {

    const { targetIdForDetailedView, recommendations } = useSelector((state:RootState) => state.userRecommendations)

    const CreateArrayWithLengthAndValue = (length: number) => {
        return Array.from({ length }, (_, index) => index + 1);
    };
    // console.log(CreateArrayWithLengthAndValue(31))
    
    useEffect(() => {
        if(targetIdForDetailedView) {
            console.log(targetIdForDetailedView);
            console.log(recommendations)
        }
    }, [targetIdForDetailedView])

    return (
        <div className="drill-down-container">
            <div className="drill-down-title">
                <div className="drill-down-breadcrum">
                    <div>
                        <span>Recomendations</span>
                        <span> / </span>
                        <span>Gastritis treatment</span>
                    </div>


                </div>
                <div className="drill-down-treatment">
                    <div>
                        <span>
                            Gastritis treatment
                        </span>
                        <span>
                            {' ' + '• 2021/12/2021 -  2022/03/31'}
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
                        <div>

                            <div className="drill-timePeriod-header">
                                <div className="drill-year-name">
                                    December
                                </div>
                                <div className="drill-year-date">
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`  }}>
                                        {item%2!==0?item:''}
                                    </div>))}
                                </div>

                            </div>
                            <div className="drill-timePeriod-morning" style={{ padding: "0px", flexDirection: "column" }}>

                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-day" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-evening" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>

                        </div>
                        <div>

                            <div className="drill-timePeriod-header">
                                <div className="drill-year-name">
                                2022 January
                                </div>
                                <div className="drill-year-date">
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`  }}>
                                        {item%2!==0?item:''}
                                    </div>))}
                                </div>

                            </div>
                            <div className="drill-timePeriod-morning" style={{ padding: "0px", flexDirection: "column" }}>

                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-day" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-evening" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>

                        </div>
                        <div>

                            <div className="drill-timePeriod-header">
                                <div className="drill-year-name">
                                February
                                </div>
                                <div className="drill-year-date">
                                    {CreateArrayWithLengthAndValue(29).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 29}%`  }}>
                                        {item%2!==0?item:''}
                                    </div>))}
                                </div>

                            </div>
                            <div className="drill-timePeriod-morning" style={{ padding: "0px", flexDirection: "column" }}>

                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(29).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 29}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(29).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 29}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-day" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(29).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 29}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(29).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 29}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-evening" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>

                        </div>
                        <div>

                            <div className="drill-timePeriod-header">
                                <div className="drill-year-name">
                                March
                                </div>
                                <div className="drill-year-date">
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`  }}>
                                        {item%2!==0?item:''}
                                    </div>))}
                                </div>

                            </div>
                            <div className="drill-timePeriod-morning" style={{ padding: "0px", flexDirection: "column" }}>

                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-day" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-evening" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(31).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / 31}%`, borderRight: `${index !== 30 ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}