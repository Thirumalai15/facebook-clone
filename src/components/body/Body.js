import React from "react"
import "../../styles/body.css";
import Feed from "./feed/Feed";
import Sidebar from './sidebar/Sidebar'
import Widgets from "./widgets/Widgets";

function Body() {
    return (
        <div className="body">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Body
