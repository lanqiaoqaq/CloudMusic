import React from "react";
import {Link} from "react-router-dom";
import "../../assets/style/trend/trendBar.css"
class TrendBar extends React.Component{
    render() {
        return(
            <>
                <div className={"ra_box1"}>
                    <div className={"ra_box1in"}>
                        <div onClick={()=>{
                            this.props.history.push("/userInfo")
                        }} className={"ra_Avatar"}>
                            <img src={require("../../assets/img/TrendImg/1.jpg")}/>
                        </div>
                        <div className={"ra_Content"}>
                            <div className={"ra_Content_1"}>
                                <p><Link className={"ra_Content_userName"} to={"/userInfo"}>用户名 </Link><span>分享单曲|发布视频：</span></p>
                                <h2>{"shijian"}</h2>
                            </div>
                            <div className={"ra_Content_2"}>
                                <div className={"ra_Content_2_word"}>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                                <div className={"ra_Content_2_vedio"}>视频或图片</div>
                            </div>
                            <div className={"ra_Content_3"}>
                                <div className={"ra_Content_3_like"}><span className={"iconfont iconthumb"}></span><span>{"11"}</span></div>
                                <div className={"ra_Content_3_com"}><span className={"iconfont iconicon_comments"}></span><span>{"11"}</span></div>
                                <div className={"ra_Content_3_share"}><span className={"iconfont iconforward"}></span></div>
                                <div className={"ra_Content_3_more"}><span className={"iconfont icondiandiandian"}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TrendBar;