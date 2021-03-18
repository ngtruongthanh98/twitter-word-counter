import React, { PureComponent } from "react";
import "./Slidebar.css";
import SlidebarOption from "../SlidebarOption/SlidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Button } from "@material-ui/core";
class Slidebar extends PureComponent {
    render() {
        return (
            <div className="slidebar">
                <TwitterIcon className="slidebar__twitterIcon" />

                <SlidebarOption Icon={HomeIcon} text="Home"/>
                <SlidebarOption Icon={SearchIcon} text="Expore"/>
                <SlidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
                <SlidebarOption Icon={MailOutlineIcon} text="Messages"/>
                <SlidebarOption Icon={ListAltIcon} text="Lists"/>
                <SlidebarOption Icon={ListIcon} text="Topics"/>
                <SlidebarOption Icon={PersonOutlineIcon} text="Profile"/>
                <SlidebarOption Icon={MoreHorizIcon} text="More"/>

                <Button variant="outlined" className="slidebar__sweet" fullWidth>Tweet</Button>

            </div>
        );
    }
}

export default Slidebar;
