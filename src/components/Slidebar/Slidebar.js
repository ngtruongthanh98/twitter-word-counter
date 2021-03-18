import React, { PureComponent } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Slidebar.css";
import SlidebarOption from "../SlidebarOption/SlidebarOption";

class Slidebar extends PureComponent {
    render() {
        return (
            <div className="slidebar">
                <TwitterIcon />

                <SlidebarOption text="Home"/>
                <SlidebarOption text="Expore"/>
                <SlidebarOption text="Notifications"/>
                <SlidebarOption text="Messages"/>
                <SlidebarOption text="Lists"/>
                <SlidebarOption text="Topics"/>
                <SlidebarOption text="Profile"/>
                <SlidebarOption text="Messages"/>
                <SlidebarOption text="More"/>

                {/* Tweet */}

            </div>
        );
    }
}

export default Slidebar;
