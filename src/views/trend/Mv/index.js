import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import MvVideo from "../../../components/Trend/MvVideo";
import trendCreator, {changeMvUrlList} from "../../../store/actionCreator/trend/index";
import "../../../assets/style/trend/mv.css";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getDate, getNowDate, getPlayerTime} from "../../../tools/date";
class Mv extends React.Component{
    constructor(){
        super();
        this.state={
            allMv:[],
            videoFeatured:[],
            rank:{}
        }
    }
    render() {
        const {allMv,videoFeatured,rank}=this.state;
        // console.log(this.state,"mvmvmvmvvm",rank.updateTime);
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
                        {
                            videoFeatured?videoFeatured.map((v,i)=>(
                                <div onClick={()=>{
                                    console.log(v.id)
                                    this.props.history.push("/mvDetails/"+v.id)
                                }} className={"ra_mv_featured_in_wor"}>
                                    <div className={"ra_mv_featured_in_wor_in"}>
                                        <Link className={"vedio"} to={"/"}>
                                            <img src={v.picUrl} alt=""/>
                                            <div className={"playerNum"}>
                                                <span className={"iconfont iconbofang3"}></span>
                                                <span>{getPlayerTime(v.playCount)}</span>
                                            </div>
                                        </Link>
                                        <div className={"name"}>
                                            <p>{v.name}</p>
                                            <h2>{v.artistName}</h2>
                                        </div>
                                    </div>
                                </div>
                            )):""
                        }
                    </div>
                </div>
                <div onClick={()=>{
                    this.props.history.push("/mvRanking");
                }} className={"ra_mv_leaderboard"}>
                    <div className={"ra_mv_leaderboard_in"}>
                        <div className={"ra_mv_leaderboard_in_left"}>
                            <p>排行榜<span className={"iconfont iconyou"}></span></p>
                            <h2>更新时间 : {getDate(rank?rank.updateTime:"")}</h2>
                        </div>
                        <div className={"ra_mv_leaderboard_in_right"}>
                            <img style={{
                                height: "1.5rem",
                                width: "2rem",
                                float: "right",
                                position:"absolute",
                                top:"0.2rem",
                                right:"0.3rem",
                                zIndex:"2"
                            }} src={rank.data?rank.data[0].cover:""} alt=""/>
                            <img style={{
                                height: "1.1rem",
                                width: "2rem",
                                float: "right",
                                position:"absolute",
                                top:"0.4rem",
                                right:"0.6rem"
                            }} src={rank.data?rank.data[1].cover:""} alt=""/>
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
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            allMv:nextProps.allMv.allMv,
            videoFeatured:nextProps.allMv.videoFeatured,
            rank:nextProps.allMv.rank
        })
    }
    componentDidMount() {
        this.props.getAllMv();
    }
}
export default connect(state=>({allMv:state.trend.allMv}),dispatch=>bindActionCreators(trendCreator,dispatch))(Mv)


