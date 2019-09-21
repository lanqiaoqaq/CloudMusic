import React from 'react';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class Single extends React.Component{
    render() {
        const singleList  = this.props.singleList
        const songs = (this.props.singleList.result?this.props.singleList.result.songs:"");
        // console.log(songs,"1")
        return(
            <div className={"single_k"}>
                <p>
                    <i className={"iconfont iconbofang"}></i>
                    <i>播放全部</i>
                    <i className={"iconfont icon-duoxuantiankong"}></i>
                    <i>多选</i>
                </p>
                <ul>
                    {
                        songs?songs.map(v=>(
                            <li key={v.id}>
                        <span>
                            <h5>{v.name}</h5>
                            <p>{v.artists[0].name}-{v.album.name}</p>
                        </span>
                                <span>
                            <i className={"iconfont iconbofang1"} style={{display:v.copyrightId===0?"none":"inline-block"}}></i>
                            <i className={"iconfont icondiandiandian"}></i>
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
        this.props.getSingleList()
    }
}
function mapStateToProps(state,props) {
    return{
        singleList: state.search.singleList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Single)