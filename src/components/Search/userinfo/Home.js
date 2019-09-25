import React from "react"
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import Tools from "../../../common/Tools"
import FindCreator from "../../../store/actionCreator/search";
import "../../../assets/style/Search/userInfo.css"
class Home extends React.Component{
    render() {
        const userInfoList = this.props.userInfoList;
        const userPlayList = this.props.userPlayList?this.props.userPlayList:"";
        const userPlayListTwo = this.props.userPlayListTwo?this.props.userPlayListTwo:"";
        // console.log(userInfoList)
        return(
            <div className={"home_k"}>
                <ul>
                    <li>
                        <span><img src={require("../../../assets/search-images/listen.jpg")} alt=""/></span>
                        <span>
                            <p>{userInfoList.profile.nickname}的听歌排行</p>
                            <p>累计听歌{userInfoList.listenSongs}首</p>
                        </span>
                    </li>
                    <li>
                        <span><img src={require("../../../assets/search-images/love.jpg")} alt=""/></span>
                        <span>
                            <p>{userInfoList.profile.nickname}喜欢的音乐</p>
                            <p>{userPlayListTwo?userPlayListTwo[0].trackCount:""}首，播放{userPlayListTwo?userPlayListTwo[0].playCount:""}次</p>
                        </span>
                    </li>
                </ul>
                <ul style={{display:userPlayListTwo.length>1?"block":"none"}}>
                    <h5>
                        <span>创建的歌单</span>
                        <span>（{userPlayListTwo.length>1?userPlayListTwo.length-1:"1"}个，被收藏3次）</span>
                    </h5>
                    {
                        userPlayListTwo?userPlayListTwo.slice(1,4).map(v=>(
                            <li key={v.id} onClick={()=>{
                                this.props.history.push(`/musiclist/${v.id}`)
                            }}>
                                <span><img src={v.coverImgUrl} alt=""/></span>
                                <span>
                            <p>{v.name}</p>
                            <p>{userPlayListTwo.length>1?v.trackCount:""}首，播放{v.playCount}次</p>
                        </span>
                            </li>
                        )):[].map(v=>{

                        })
                    }
                    <h5 style={{display:userPlayListTwo.length>3?"block":"none"}}>更多歌单</h5>
                </ul>
                <ul >
                    <h5>
                        <span>收藏的歌单</span>
                        <span>（{userPlayList.length}）</span>
                    </h5>
                    {
                        userPlayList?userPlayList.slice(0,3).map(v=>(
                            <li key={v.id} onClick={()=>{
                                this.props.history.push(`/musiclist/${v.id}`)
                            }}>
                                <span><img src={v.coverImgUrl} alt=""/></span>
                                <span>
                            <p>{v.name}</p>
                            <p>{v.trackCount?v.trackCount:""}首，by {v.creator.nickname}，播放{v.playCount}次</p>
                        </span>
                            </li>
                        )):[].map(v=>{

                        })
                    }

                    <h5 style={{display:userPlayList.length>3?"block":"none"}}>更多歌单</h5>
                </ul>
                <ul>
                    <li>基本信息</li>
                    <li>村龄：2年（{Tools.date2(userPlayListTwo.length>1?userPlayListTwo[0].createTime:"")}）</li>
                    <li>跟多信息</li>
                </ul>
            </div>
        )
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
export default connect(mapStateToProps,mapDispatchProps) (Home)