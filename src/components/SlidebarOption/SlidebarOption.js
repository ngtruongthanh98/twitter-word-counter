import React from "react";
import "./SlidebarOption.css";

function SlidebarOption({active, text, Icon }) {
    return (
        <div className={`slidebarOption ${active} && 'sidebarOption--active'`}>
            <Icon/>
            <h3>{text}</h3>
        </div>
    );
}

export default SlidebarOption;