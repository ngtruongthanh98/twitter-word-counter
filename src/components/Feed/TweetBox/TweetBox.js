import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../../../firebase";
import "./TweetBox.css";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const [count, setCount] = useState(0);

    let Max = 20;

    const sendTweet = (e) => {
        e.preventDefault();

        if (tweetMessage.length) {
            db.collection("posts").add({
                displayName: "Thanh Nguyen",
                username: "@drazennguyen",
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar:
                    "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/157884103_2880654552182638_2842458262959537966_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jigiLCHGgBMAX-vXngN&_nc_ht=scontent.fvca1-1.fna&oh=36429c6a8803f035a59cf4a0a7bbea33&oe=60778A7C",
            });
        }

        setTweetMessage("");
        setTweetImage("");

        setCount("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/157884103_2880654552182638_2842458262959537966_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jigiLCHGgBMAX-vXngN&_nc_ht=scontent.fvca1-1.fna&oh=36429c6a8803f035a59cf4a0a7bbea33&oe=60778A7C" />
                    <input
                        onChange={(e) => {
                            setTweetMessage(e.target.value);
                            console.log("*****", e.target.value);
                        }}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
            </form>

            {/* <p>{tweetMessage.length}</p> */}

            <p>{tweetMessage.length <= Max ? tweetMessage.length : Max-tweetMessage.length}</p>

            <Button
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton"
            >
                Tweet
            </Button>
        </div>
    );
}

export default TweetBox;
