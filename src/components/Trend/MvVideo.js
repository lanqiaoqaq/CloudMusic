import React from "react";
import trendCreator from "../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class MvVideo extends React.Component{
    render() {
        const {v,i,bground,mvUrlList,singerPic,mvLike,mvComment}=this.props;
        // console.log(mvLike[i],1111111111111111111111111111);
        return(
            <div className={"ra_mv_more_body" } key={v.id}>
                <div onClick={()=>{
                    this.props.history.push("/mvDetails/"+v.id)
                }} className={"ra_mv_more_body_top"}>
                    <div className={"ra_mv_more_body_top_position"}>
                        <div className={"playerNum"}>
                            <span className={"iconfont iconbofang3"}></span>
                            <span>{v.playCount}</span>
                        </div>
                        <video style={bground} controls poster={"j.jpg"}  src={mvUrlList[i]}></video>
                    </div>
                    <p>{v.briefDesc}</p>
                </div>
                <div className={"ra_mv_more_body_bottom"}>
                    <div onClick={()=>{
                        this.props.history.push("/userInfo")
                    }} className={"ra_mv_more_body_bottom_l"}>
                        <img src={singerPic[i]} alt=""/>
                        <span>{v.artistName}</span>
                    </div>
                    <div className={"ra_mv_more_body_bottom_r"}>
                        <span className={"iconfont iconthumb"}>{mvLike[i]?mvLike[i].likeCount:""}</span>
                        <span onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"iconfont iconicon_comments"}>{mvLike[i]?mvLike[i].commentCount:""}</span>
                        <span className={"iconfont icondiandiandian"}></span>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getVideoSrc(this.props.v.id);
        this.props.getSingerPic(this.props.v.artists[0].id);
        this.props.getMvLike(this.props.v.id);
        // this.props.getInfo(this.props.v.id,this.props.v.artists[0].id,this.props.v.id)
    }
}

export default connect(state=>({mvUrlList:state.trend.mvUrlList,singerPic: state.trend.singerPic,mvLike:state.trend.mvLike,mvComment:state.trend.mvComment}),dispatch=>bindActionCreators(trendCreator,dispatch))(MvVideo)