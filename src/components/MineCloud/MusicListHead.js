//歌单列表页
import React from "react";
import PlayList from "../Search/DetailSearch/PlayList";
import {withRouter} from "react-router-dom";
class MusicListHead extends React.Component{
    constructor(){
        super();
        this.state={
            playlist:[],
            nickname:"",
            name:"",
            avatarUrl:''
        }
    }
    render(){
        const {playlist,nickname,name,avatarUrl}=this.state;
         return(
            <>
                <div className="cy_ml_head" style={{ backgroundImage: `url(${avatarUrl})` }}>
                    <p className="cy_ml_hh">
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <span >歌单</span>
                        <span style={{lineHeight: ".29rem"}} className={"iconfont iconfangdajing"}></span>
                        <span className={"iconfont icondiandiandian"}></span>
                    </p>
                    <div className="cy_ml_mm">
                        <img style={{width:"3.83rem",height:"3.84rem",margin:".2rem .5rem 0 .2rem"}} src={playlist.coverImgUrl}/>
                        <div >
                            <p className="cy_ml_wrap">{name}</p>
                            <div>
                            <img className="cy_ml_iconImg" src={avatarUrl}/>
                            <span >{nickname}</span>
                            <span className={"iconfont iconyou"}></span>
                            </div>
                        </div>
                    </div>
                    <div className="cy_ml_bm">
                        <span className={"iconfont iconxinjian"}></span>
                        <span className={"iconfont iconpinglun"}></span>
                        <span className={"iconfont iconshare"}></span>
                        <span className={"iconfont iconxiazai1"}></span>
                    </div>
                </div>
            </>
        )
    }
    componentWillReceiveProps(nextProps){
          this.setState({
         playlist:nextProps.playListDetail.playlist,
         nickname:nextProps.playListDetail.playlist.creator.nickname,
         name:nextProps.playListDetail.playlist.name,
         avatarUrl:nextProps.playListDetail.playlist.creator.avatarUrl
      })
    }
}
export default withRouter(MusicListHead);