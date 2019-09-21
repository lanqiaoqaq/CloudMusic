import React from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from '../../store/actionCreator/find/index'
class IntroPlaylist extends React.Component {
    render() {
        const introPlaylist =  this.props.introPlaylist;
        //console.log(introPlaylist,1111)
        return (
            <ul className={"playlist_list"}>
                {
                    introPlaylist.map(v=>(
                        <li key={v.id} className={"playlist_s"} onClick={()=>{
                            this.props.history.push("/musiclist/"+v.id)
                        }}>
                            <div style={{width:"3.1rem",height:"3.24rem"}}>
                                <img style={{width:"100%",height:"100%",borderRadius:"5px"}} src={v.picUrl} alt=""/>
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
}
function mapStateToProps(state,props) {
    return {
        introPlaylist:state.find.introPlaylist
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(IntroPlaylist);