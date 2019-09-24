import React from "react"
import {
    Route,
    NavLink
} from 'react-router-dom';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import Home from "../../../components/Search/userinfo/Home";
import Dynamic from "../../../components/Search/userinfo/Dynamic"
import "../../../assets/style/Search/userInfo.css"
import FindCreator from "../../../store/actionCreator/search";
class UserInfo extends React.Component{
    render() {
        const userInfoList = this.props.userInfoList;
        const userId = userInfoList.userPoint?userInfoList.userPoint.userId:"";
        const nickname = userInfoList.profile?userInfoList.profile.nickname:"";
        const newFollows = userInfoList.profile?userInfoList.profile.newFollows:"";
        const followeds = userInfoList.profile?userInfoList.profile.followeds:"";
        const vipType = userInfoList.profile?userInfoList.profile.vipType:"";
        const avatarUrl = userInfoList.profile?userInfoList.profile.avatarUrl:"";
        const backgroundUrl = userInfoList.profile?userInfoList.profile.backgroundUrl:"";
        const gender = userInfoList.profile?userInfoList.profile.gender:"";
        // console.log(gender,"111111");
        return(
            <div className={"userInfo_k"}>
                <div className={"userInfo_heard"} style={{backgroundImage:backgroundUrl?`url(${backgroundUrl})`:"" ,backgroundSize: "100% 110%"}}>
                    <p>
                        <span className={"iconfont iconzuojiantou"} onClick={()=>{
                            this.props.history.push("/SearchDetails/UserHome")
                        }}></span>
                        <span></span>
                        <span className={"iconfont icondiandiandian"}></span>
                    </p>
                    <p><img src={avatarUrl} alt=""/></p>
                    <p>
                        <span>{nickname}</span>
                        <span>已关注1天</span>
                    </p>
                    <p>
                        <span>关注{newFollows}</span>
                        <span>粉丝{followeds}</span>
                    </p>
                    <ul>
                        <li className={"sex_0"} style={{background:gender===2?"lightpink":"#00a5e0"}}>
                            <i>{gender===2?"♀":"♂"}</i>
                            <i>95后</i>
                        </li>
                        <li>Lv.{userInfoList.level}</li>
                        <li className={"iconfont iconren"}></li>
                        <li className={"iconfont iconxiaoxi"}>发私信</li>
                    </ul>
                </div>
                <div className={"userInfo_footer"}>
                    <ul id={"myHome"}>
                        <li><NavLink to={`/UserInfo/${userId}`} exact activeStyle={{color:"red",borderBottom:"0.054rem solid red"}}>主页</NavLink></li>
                        <li><NavLink to={"/UserInfo/dynamic"} activeStyle={{color:"red",borderBottom:"0.054rem solid red"}}>动态</NavLink></li>
                    </ul>
                    <ul>
                        <li><Route path={`/UserInfo/${userId}`} exact component={Home}></Route></li>
                        <li><Route path={"/UserInfo/dynamic"}  component={Dynamic}></Route></li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getFlow(this.props.match.params.id);
        this.props.getUserPlayList(this.props.match.params.id);
        this.props.getUserPlayListTwo(this.props.match.params.id)
    }
}
function mapStateToProps(state,props) {
    return{
        userInfoList: state.search.userInfoList,
        userPlayList: state.search.userPlayList,
        userPlayListTwo: state.search.userPlayListTwo
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (UserInfo)