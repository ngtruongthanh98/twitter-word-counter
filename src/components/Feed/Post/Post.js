import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from "@material-ui/icons";

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar,
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/157884103_2880654552182638_2842458262959537966_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jigiLCHGgBMAX-vXngN&_nc_ht=scontent.fvca1-1.fna&oh=36429c6a8803f035a59cf4a0a7bbea33&oe=60778A7C" />
            </div>
            <div className="post__boby">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Thanh Nguyen{""}
                            <span>
                                <CheckCircleIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="post_headerDescription">
                    <p>Hello</p>
                </div>
            </div>
            <img
                src="https://lh3.googleusercontent.com/zqdJ2VWYqaT9WW7WlFmkB7nupsxFx0oldEDtAMuiVAI9J23sX3RxzCoS_RP4At_CX-yBcPztsenaVGWWORcbreEFU79mnRtuzmvR92dk97-6mKbXpC552PKXu9YWYyI8FetV_7UJbfwMumxgbMvhZyCis2PgjIoFneejmsqeSzp6EKl51N7NYVotjtr2Ja5iusf8nlR_sIRBF-XVDB3XQHFljzpGhdfu4JxMBH2r5LJlkywQ1h2p16gZMh_VdeDbJOpVrPvgJ5sp3f82oBbmA1AaViab5bjYz-UP9a6_QQjnge9o8y_crOgxyiext_JXy9pBvM9LtKHzYcNOcHwhBlHXyGRwzW13YJZK9LdBIt6q84o2VstS9a_1GDkTqCyWIliHPFVYtkI8l2QbiUdNoHnuVs7Zcu7437fhvKBMrgNvmPoXTbg8-RGIDfUlsWP06v8ZAN-4U9Uqh36NfP5P80rgxdBaCfVKNMVNNwS1hhKoREOGEgkrhbTd5GpE_xqV5S5XMvW2tnxIVPSHNkfG95DQWwKiw7B7LO2YLheWwLwjAAwty2V7hHoCwVcPG_WJslq3m8YdTX0eBTZW9A_obzDZGR7BH9hpIxYaSc6XM45t-KtDjeVtbfgWztGgyltX0eq1OeE0PBB7DpK-aFI9TDP4HNKdvnCetEmxnpInwfK1s8Wud7geZHxAqGh2eYx9Pu7M0f5iXAkB0G8GlTSgX44=w720-h817-no?authuser=0"
                alt="Cloud"
            />
            <div className="post__footer">
                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small"/>
                <FavoriteBorder fontSize="small"/>
                <Publish fontSize="small"/>
            </div>
        </div>
    );
}

export default Post;
