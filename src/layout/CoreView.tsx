import { Outlet } from "react-router";

// main panel to show all the content respective to its navlink 
export function CoreView() {

    return (
        <div className="core-view">
            <Outlet />
        </div>       
    )

}