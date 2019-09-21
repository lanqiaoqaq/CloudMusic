import React from 'react';
import axios from "axios"
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class Album extends React.Component{
    render() {
        let userHomeList
        if(this.props.userHomeList) {
            userHomeList  = this.props.userHomeList.result.userprofiles
        }
        // console.log(userHomeList,"3");
        return(
            <div className={"userHome_k"}>
                <div className={"my_kwc"} style={{display:userHomeList?"none":"block"}}>未找到与"{localStorage._k}"相关的内容</div>
                <ul>
                    {
                        userHomeList?userHomeList.map(v=>(
                            <li key={v.userId} onClick={()=>{
                                this.props.history.push(`/UserInfo/${v.userId}`)
                            }}>
                                <span><img onError={(e) => {e.target.onerror = null;e.target.src="http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"}}  src={v.avatarUrl} alt=""/></span>
                                <span>
                                <p>{v.nickname}
                                    <i className={"sex_1"} style={{display:v.gender===1?"inline-block":"none"}}>♂</i>
                                    <i className={"sex_2"} style={{display:v.gender===2?"inline-block":"none"}}>♀</i>
                                </p>
                                <p>{v.signature}</p>
                            </span>
                                <span className={"iconfont iconjiahao"} id={"attention"}>关注</span>
                            </li>
                        )):[].map(v=>{

                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getUserHomeList(localStorage._k)
        // console.log(this.props)
    }
}
function mapStateToProps(state,props) {
    return{
        userHomeList: state.search.userHomeList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Album)