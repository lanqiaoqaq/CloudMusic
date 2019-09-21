import React from 'react';
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
                <ul>
                    {
                        videos?videos.map(v=>(
                            <li key={v.vid}>
                                <span><img src={v.coverUrl} alt=""/></span>
                                <span>
                                <p>{v.title}</p>
                                <p>{v.playTime} ,  {v.creator[0].userName}</p>
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
        this.props.getVideoList()
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