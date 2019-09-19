import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import MvVideo from "../../../components/Trend/MvVideo";
import trendCreator, {changeMvUrlList} from "../../../store/actionCreator/trend/index";
import "../../../assets/style/trend/mv.css";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getDate} from "../../../tools/date";
class Mv extends React.Component{
    render() {
        const {allMv}=this.props;
    // ,mvUrlList,singerPic,mvLike
    //     console.log(this.props);
        // const str="";
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
                            <h2>更新时间 : {"getDate()"}</h2>
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
                    {
                        allMv.map((v,i)=>{
                            const bground={
                                background: `url(${v.cover})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "0 0"
                            };
                            return(
                                <MvVideo {...this.props} v={v} i={i} bground={bground}></MvVideo>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getAllMv();
    }
}
export default connect(state=>({allMv:state.trend.allMv}),dispatch=>bindActionCreators(trendCreator,dispatch))(Mv)


