import React, { PureComponent } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

class TweetBox extends PureComponent {
    render() {
        return (
            <div className="tweetBox">
                <form>
                    <div className="tweetBox__input">
                        <Avatar src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/157884103_2880654552182638_2842458262959537966_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jigiLCHGgBMAX-vXngN&_nc_ht=scontent.fvca1-1.fna&oh=36429c6a8803f035a59cf4a0a7bbea33&oe=60778A7C" />
                        <input placeholder="What's happening?" type="text" />
                    </div>
                    <input
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />
                </form>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </div>
        );
    }
}

export default TweetBox;
