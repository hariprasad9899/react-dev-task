import { Sidebar } from "./Sidebar";
import "../styles/indexlayout.css"
import { CoreView } from "./CoreView";
import { useState } from "react";

export function IndexLayout() {
    
    const [isSidenavToggle, setIsSideNavToggled] = useState<boolean>(true)

    const handleSidenavToggle = () => {
        setIsSideNavToggled((prevState) => !prevState)
    }

    return (
        <div className="index-layout">
            <Sidebar toggleState = {isSidenavToggle} handleToggle = {handleSidenavToggle}/>
            <CoreView />
        </div>
    )

}