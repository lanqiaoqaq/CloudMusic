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
        this.state={
            privileges:[]
        }
    }
    render(){
         return(
            <>
               <MusicListHead {...this.props}></MusicListHead>
               {
                   this.state.privileges.map(v=>(
                        <List key={v.id}></List>
                   ))
               }
              
            </>
        )
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            privileges:nextProps.playListDetail.privileges
        })
  }
   componentDidMount(){
    console.log(this.props.match.params.id);
    this.props.getPlayListDetail(this.props.match.params.id);
   
   }
}
function mapStateToProps(state,props){
    return {
        playListDetail:state.profile.cyPlaylistDetail
    }
}
function mapDispatchToProps(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MusicList);