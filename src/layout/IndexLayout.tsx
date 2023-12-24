import { Sidebar } from "./Sidebar";
import "../styles/indexlayout.css"
import { Mainbar } from "./Mainbar";

export function IndexLayout() {

    return (
        <div className="index-layout">
            <Sidebar />
            <Mainbar />
        </div>
    )

}