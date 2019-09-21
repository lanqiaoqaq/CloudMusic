import React from 'react';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class SongWriter extends React.Component{
    render() {
        const songWriterList  = this.props.songWriterList
        const artists = (this.props.songWriterList.result?this.props.songWriterList.result.artists:"");
        // console.log(artists,"1")
        return(
            <div className={"songwriter"}>
                <ul>
                    {
                        artists?artists.map(v=>(
                            <li key={v.id}>
                                <span><img src={v.picUrl} alt=""/></span>
                                <span>
                                <b>{v.name}</b>
                                <b className={"iconfont iconren"}></b>
                                <b>已入驻</b>
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
        this.props.getSongWriterList()
    }
}
function mapStateToProps(state,props) {
    return{
        songWriterList: state.search.songWriterList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (SongWriter)