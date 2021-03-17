import React, { PureComponent } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Slidebar.css";
import SlidebarOption from "../SlidebarOption/SlidebarOption";

class Slidebar extends PureComponent {
    render() {
        return (
            <div className="slidebar">
                <TwitterIcon />

                <SlidebarOption />
                <SlidebarOption />
                <SlidebarOption />
                <SlidebarOption />
            </div>
        );
    }
}

export default Slidebar;
