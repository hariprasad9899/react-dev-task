import PrintIcon from "../assets/svg/PrintIcon.svg"
import '../styles/drillDownComponent.css'
import {useState,useEffect} from 'react'
import { Iprops } from "../utils/getMonthsAndDays";
export function DrillDownComponent() {
    const data = [{ startDate: '9/12/2022', endDate: '30/03/2023' }];
    const [result, setResult] = useState({});
    const [janYear,setJanYear]=useState(2024)
    const CreateArrayWithLengthAndValue = (length: number) => {
        return Array.from({ length }, (_, index) => index + 1);
    };
    
    useEffect(() => {
        const getMonthsAndDays = () => {
          const newResult :any= {};
    
          data.forEach(({ startDate, endDate }) => {
            const [startDay, startMonth, startYear] = startDate.split('/').map(Number);
            const [endDay, endMonth, endYear] = endDate.split('/').map(Number);
           
            let start = new Date(startYear, startMonth - 1, startDay);
            let end = new Date(endYear, endMonth - 1, endDay);
            
            while (start <= end) {
              const monthKey = `${start.getMonth() + 1}/${start.getFullYear()}`;
              const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);
              const daysInMonth = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
            
                if(monthKey[0]==='1'){
                    setJanYear(start.getFullYear())
                }
              if (!newResult[monthKey]) {
                newResult[monthKey] = { days: 0, monthName };
              }
          
 
              newResult[monthKey].days =  (daysInMonth );
    
              start.setMonth(start.getMonth() + 1);
              start.setDate(1);
            }
          });
      
          setResult(newResult);
        };
    
        getMonthsAndDays();
      }, []);
      console.log(Object.values(result))
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
                      {Object.values(result)?.map((item:any)=>{
                        const {days,monthName}=item
                        return(  <div>

                            <div className="drill-timePeriod-header">
                                <div className="drill-year-name">
                                    { (monthName==='January'?janYear:' ')+ " " + monthName}
                                </div>
                                <div className="drill-year-date">
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`  }}>
                                        {item%2!==0? item:''}
                                    </div>))}
                                </div>

                            </div>
                            <div className="drill-timePeriod-morning" style={{ padding: "0px", flexDirection: "column" }}>

                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days-1) ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days-1) ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-day" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days-1) ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days-1) ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>
                            <div className="drill-timePeriod-evening" style={{ padding: "0px", flexDirection: "column" }}>
                                <div style={{ height: "50%", borderBottom: "1px solid #CBD4EB", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days-1) ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                                <div style={{ height: "50%", display: "flex" }}>
                                    {CreateArrayWithLengthAndValue(days).map((item: number, index: number) => (<div style={{ height: "100%", width: `${100 / days}%`, borderRight: `${index !== (days-1) ? '1px solid #CBD4EB' : ''}` }}>

                                    </div>))}
                                </div>
                            </div>

                        </div>)})}
                        {/* <div>

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

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}