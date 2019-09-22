//歌单列表页
import React from "react";
import List from "./List";
import MusicListHead from "./MusicListHead";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../../store/actionCreator/profile/index";
class MusicList extends React.Component {
    constructor() {
        super();
        this.state={
            songNum:0
        }
    }
    render() {
        return (
            <>
                <MusicListHead {...this.props}></MusicListHead>
                <div className={"single_k"}>
                    <div className={"cy_single_k"}>
                        <p>
                             <i className={"iconfont iconbofang"}></i>
                            <i>播放全部 (共{this.props.songDetail.songs?this.props.songDetail.songs.length:0}首)</i>
                        </p>
                       <p>
                           <i className={"iconfont icon-duoxuantiankong"}></i>
                            <i>多选</i>
                       </p>
                    </div>
                </div>

                <List {...this.props}></List>

            </>
        )
    }
    //   shouldComponentUpdate(nextProps){
    //     if(JSON.stringify(nextProps.songDetail) !== JSON.stringify(this.props.songDetail)){
    //         return true
    //     }
    //     return false;
    // }
  
    componentDidMount() {
        this.props.getPlayListDetail(this.props.match.params.id);
    }
}
function mapStateToProps(state, props) {
    return {
        playListDetail: state.profile.cyPlaylistDetail,
        songDetail: state.profile.cySongDetail
    }
}
function mapDispatchToProps(dispatch, props) {
    return bindActionCreators(profileCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicList);