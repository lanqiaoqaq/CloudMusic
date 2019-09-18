import React from "react";
import {Link} from "react-router-dom";
import "../../../assets/style/trend/mv.css"
export default class Mv extends React.Component{
    render() {
        return(
            <div className={"ra_mv"}>
                <div className={"ra_mv_featured"}>
                    <div className={"ra_mv_featured_in"}>
                        <div onClick={()=>{
                            this.props.history.push("/mvFeatured")
                        }} className={"ra_mv_featured_in_nav"}>
                            <span className={"word"}>MV精选</span>
                            <span className={"iconfont iconyou"}></span>
                        </div>
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_mv_featured_in_wor"}>
                            <div className={"ra_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                            <div className={"ra_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                            <div className={"ra_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                            <div className={"ra_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=>{
                    this.props.history.push("/mvRanking");
                }} className={"ra_mv_leaderboard"}>
                    <div className={"ra_mv_leaderboard_in"}>
                        <div className={"ra_mv_leaderboard_in_left"}>
                            <p>排行榜<span className={"iconfont iconyou"}></span></p>
                            <h2>更新时间{Date.now()}</h2>
                        </div>
                        <div className={"ra_mv_leaderboard_in_right"}>
                            <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={"ra_mv_more"}>
                    <div className={"ra_mv_more_top"}>
                        <p>更多精彩MV</p>
                    </div>
                    <div className={"ra_mv_more_body"}>
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_mv_more_body_top"}>
                            <div className={"ra_mv_more_body_top_position"}>
                                <div className={"playerNum"}>
                                    <span className={"iconfont iconbofang3"}></span>
                                    <span>{"播放量"}</span>
                                </div>
                                <video autoPlay controls src={require("../../../assets/video/caaf3d25944dd6c010d0796b66df893e.mp4")}></video>
                            </div>

                            <p>{"视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍"}</p>
                        </div>
                        <div className={"ra_mv_more_body_bottom"}>
                            <div onClick={()=>{
                                this.props.history.push("/userInfo")
                            }} className={"ra_mv_more_body_bottom_l"}>
                                <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                <span>{"用户名"}</span>
                            </div>
                            <div className={"ra_mv_more_body_bottom_r"}>
                                <span className={"iconfont iconthumb"}>123</span>
                                <span onClick={()=>{
                                    this.props.history.push("/mvDetails")
                                }} className={"iconfont iconicon_comments"}>123</span>
                                <span className={"iconfont icondiandiandian"}></span>
                            </div>
                        </div>
                    </div>
                    <div className={"ra_mv_more_body"}>
                        <div className={"ra_mv_more_body_top"}>
                            <div className={"ra_mv_more_body_top_position"}>
                                <div className={"playerNum"}>
                                    <span className={"iconfont iconbofang3"}></span>
                                    <span>{"播放量"}</span>
                                </div>
                                <video autoPlay controls src={require("../../../assets/video/caaf3d25944dd6c010d0796b66df893e.mp4")}></video>
                            </div>

                            <p>{"视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍"}</p>
                        </div>
                        <div className={"ra_mv_more_body_bottom"}>
                            <div className={"ra_mv_more_body_bottom_l"}>
                                <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                <span>{"用户名"}</span>
                            </div>
                            <div className={"ra_mv_more_body_bottom_r"}>
                                <span className={"iconfont iconthumb"}>123</span>
                                <span className={"iconfont iconicon_comments"}>123</span>
                                <span className={"iconfont icondiandiandian"}></span>
                            </div>
                        </div>
                    </div>
                    <div className={"ra_mv_more_body"}>
                        <div className={"ra_mv_more_body_top"}>
                            <div className={"ra_mv_more_body_top_position"}>
                                <div className={"playerNum"}>
                                    <span className={"iconfont iconbofang3"}></span>
                                    <span>{"播放量"}</span>
                                </div>
                                <video autoPlay controls src={require("../../../assets/video/caaf3d25944dd6c010d0796b66df893e.mp4")}></video>
                            </div>

                            <p>{"视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍"}</p>
                        </div>
                        <div className={"ra_mv_more_body_bottom"}>
                            <div className={"ra_mv_more_body_bottom_l"}>
                                <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                <span>{"用户名"}</span>
                            </div>
                            <div className={"ra_mv_more_body_bottom_r"}>
                                <span className={"iconfont iconthumb"}>123</span>
                                <span className={"iconfont iconicon_comments"}>123</span>
                                <span className={"iconfont icondiandiandian"}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
