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
        // console.log(userInfoList.userPoint)
        const userId = (userInfoList.userPoint?userInfoList.userPoint.userId:"");
        console.log(userId)
        return(
            <div className={"userInfo_k"}>
                <div className={"userInfo_heard"}>
                    <p>
                        <span className={"iconfont iconzuojiantou"} onClick={()=>{
                            this.props.history.push("/SearchDetails/UserHome")
                        }}></span>
                        <span>将故事写给我们——</span>
                        <span className={"iconfont icondiandiandian"}></span>
                    </p>
                    <p><img src={require("../../../assets/search-images/15.jpg")} alt=""/></p>
                    <p>
                        <span>将故事写给我们——</span>
                        <span>已关注1天</span>
                    </p>
                    <p>
                        <span>关注12</span>
                        <span>粉丝110</span>
                    </p>
                    <ul>
                        <li>
                            <i>♀</i>
                            <i>95后</i>
                        </li>
                        <li>Lv.8</li>
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
        this.props.getFlow(this.props.match.params.id)
    }
}
function mapStateToProps(state,props) {
    return{
        userInfoList: state.search.userInfoList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (UserInfo)