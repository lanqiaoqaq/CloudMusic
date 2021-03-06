import React from 'react';
import Tools from "../../../common/Tools"
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class Video extends React.Component{
    render() {
        const videoList  = this.props.videoList
        const videos = (this.props.videoList.result?this.props.videoList.result.videos:"");
        // console.log(videos,"1")
        return(
            <div className={"video_k"}>
                <div className={"my_kwc"} style={{display:videos?"none":"block"}}>"{localStorage._k}"相关的内容加载中.....</div>
                <ul>
                    {
                        videos?videos.map(v=>(
                            <li key={v.vid} onClick={()=>{
                                if (v.type==0) {
                                    this.props.history.push(`/mvDetails/${v.vid}`)
                                }else {
                                    this.props.history.push(`/videoDetails/${v.vid}`)
                                }
                            }}>
                                <span><img src={v.coverUrl} alt=""/></span>
                                <span>
                                <p>{v.title}</p>
                                <p>{Tools.getVideoLong(v.durationms)} ,  {v.creator[0].userName}</p>
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
        this.props.getVideoList(localStorage._k)
    }
}
function mapStateToProps(state,props) {
    return{
        videoList: state.search.videoList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Video)