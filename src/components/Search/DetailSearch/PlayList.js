import React from 'react';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
import Tools from "../../../common/Tools";
class PlayList extends React.Component{
    render() {
        const playList  = this.props.playList
        const playLists = (this.props.playList.result?this.props.playList.result.playlists:"");
        // console.log(playLists,"1")
        return(
            <div className={"playList_k"}>
                <div className={"my_kwc"} style={{display:playLists?"none":"block"}}>"{localStorage._k}"相关的内容加载中.....</div>
                <ul>
                    {
                        playLists?playLists.map(v=>(
                            <li key={v.id} onClick={()=>{
                                this.props.history.push(`/musiclist/${v.id}`)
                            }}>
                                <span><img src={v.coverImgUrl} alt=""/></span>
                                <span>
                                <p>{v.name}</p>
                                <p>{v.trackCount}首，by{v.creator.nickname}，播放{Tools.tranNumber(v.playCount,1)}次</p>
                            </span>
                            </li>
                        )):[].map(v=>{

                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getPlayList(localStorage._k)
    }
}
function mapStateToProps(state,props) {
    return{
        playList: state.search.playList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (PlayList)