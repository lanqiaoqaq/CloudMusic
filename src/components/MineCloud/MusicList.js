//歌单列表页
import React from "react";
import List from "./List";
import MusicListHead from "./MusicListHead";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../../store/actionCreator/profile/index";
class MusicList extends React.Component{
    constructor(){
        super();
    }
    render(){
         return(
            <>
               <MusicListHead {...this.props}></MusicListHead>
               
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
   componentDidMount(){
    this.props.getPlayListDetail(this.props.match.params.id);
   }
}
function mapStateToProps(state,props){
    return {
        playListDetail:state.profile.cyPlaylistDetail,
        songDetail:state.profile.cySongDetail
    }
}
function mapDispatchToProps(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MusicList);