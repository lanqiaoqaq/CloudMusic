import React from 'react';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
import Tools from "../../../common/Tools";
class Album extends React.Component{
    render() {
        const albumList  = this.props.albumList
        const albums = (this.props.albumList.result?this.props.albumList.result.albums:"");
        // console.log(albums,"1")
        return(
            <div className={"album_k"}>
                <ul>
                    {
                        albums?albums.map(v=>(
                            <li key={v.id}>
                                <span><img src={v.blurPicUrl} alt=""/></span>
                                <span>
                                <p>{v.name}</p>
                                <p>
                                    <b>{v.artist.name}，</b>
                                    <b>{Tools.date(v.publishTime)}</b>
                                </p>
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
        this.props.getAlbumList()
    }
}
function mapStateToProps(state,props) {
    return{
        albumList: state.search.albumList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Album)