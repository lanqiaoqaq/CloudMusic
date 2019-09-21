import React from 'react'
import {
    bindActionCreators
} from 'redux'
import {
    connect
}from 'react-redux'
import FindCreator from '../../../store/actionCreator/find/index'
class Child7 extends React.Component{
    render(){
        const {songListOther} = this.props;
        return(
            <ul className={"playlist_list"}>
                {
                    songListOther.map(v=>(
                        <li key={v.id} className={"playlist_s"}>
                            <div style={{width:"3.1rem",height:"3.24rem"}}>
                                <img style={{width:"100%",height:"100%",borderRadius:"5px"}} src={v.coverImgUrl} alt=""/>
                            </div>
                            <p style={{fontSize:"0.3rem",lineHeight:"0.44rem",color:"#3a3a3a"}}>
                                {v.name}
                            </p>
                            <div className={"playCount"}>
                                <i className={"iconfont iconbofang"}></i>
                                <span>{this.playCountFilter(v.playCount)}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
    playCountFilter(playCount){
        if(playCount <= 99999){
            return playCount;
        }else {
            return Math.floor(playCount / 10000) + "万"
        }
    }
    componentDidMount(){
        this.props.getIntroPlaylist()
    }
    componentDidMount(){
        this.props.getSonglist_other("民谣");
    }
}
function mapStateToProps(state) {
    return{
        songListOther:state.find.songListOther
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Child7)