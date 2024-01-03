import { useEffect } from "react";
import { DrillDownComponent } from "../components/DrillDownComponent";
import { SchedulerComponent } from "../components/SchedulerComponent";
import { getUserRecomendation } from "../services/getUserRecomendation";
import { Outlet } from "react-router";

export function Mainbar() {


    return (
        <div className="mainbar-layout">
            <Outlet />
        </div>
       
    )

}