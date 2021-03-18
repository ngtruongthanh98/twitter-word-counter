import React from "react";
import "./SlidebarOption.css";

function SlidebarOption({ text, Icon }) {
    return (
        <div className="slidebarOption">
            <Icon/>
            <h3>{text}</h3>
        </div>
    );
}

export default SlidebarOption;