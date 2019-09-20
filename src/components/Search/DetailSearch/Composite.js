import React from 'react';
import Tools from "../../../common/Tools"
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class Composite extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const compositeList = this.props.compositeList;
        const song = (this.props.compositeList.result?this.props.compositeList.result.song:"");
        const video = (this.props.compositeList.result?this.props.compositeList.result.video:"");
        const playList = (this.props.compositeList.result?this.props.compositeList.result.playList:"");
        const mlog = (this.props.compositeList.result?this.props.compositeList.result.mlog:"");
        const artist = (this.props.compositeList.result?this.props.compositeList.result.artist:"");
        const album = (this.props.compositeList.result?this.props.compositeList.result.album:"");
        const djRadio = (this.props.compositeList.result?this.props.compositeList.result.djRadio:"");
        const user = (this.props.compositeList.result?this.props.compositeList.result.user:"");
        // console.log(djRadio)
        return(
            <div className={"composite_k"}>
                <div className={"composite_singe"}>
                    <ul>
                        <li>单曲</li>
                        <li className={"iconfont iconbofang"}>播放全部</li>
                    </ul>
                    <ul>
                        {
                            song?song.songs.map(v=>(
                                <li key={v.id}>
                            <span>
                                <p>{v.name} {v.alia}</p>
                                <p>{v.ar[0].name}-{v.al.name}</p>
                            </span>
                                    <span>
                                <i className={"iconfont iconbofang1"}></i>
                                <i className={"iconfont icondiandiandian"}></i>
                            </span>
                                </li>
                            )):[].map(v=>{

                                } )
                        }
                    </ul>
                    <h5 style={{display:song?"block":"none"}} onClick={()=>{
                        this.props.history.push("/SearchDetails/Single")
                    }}>{song?song.moreText:""}</h5>
                </div>
                <div className={"composite_video"}>
                    <h5 style={{display:video?"block":"none"}}>视频</h5>
                    <ul>
                        {
                            video?video.videos.map(v=>(
                                <li key={v.playTime}>
                                    <span><img src={v.coverUrl} alt=""/></span>
                                    <span>
                                <p>{v.title}</p>
                                <p>{v.playTime}  {v.creator[0].userName}</p>
                            </span>
                                </li>
                            )):[].map(v=>{

                            })
                        }
                    </ul>
                    <h5 style={{display:video?"block":"none"}} onClick={()=>{
                        this.props.history.push("SearchDetails/Video")
                    }}>{video?video.moreText:""}</h5>
                </div>
                <div className={"composite_playList"}>
                    <h5 style={{display:playList?"block":"none"}}>歌单</h5>
                    <ul>
                        {
                            playList?playList.playLists.map(v=>(
                                <li key={v.id}>
                                    <span><img src={v.coverImgUrl} alt=""/></span>
                                    <span>
                                <p>{v.name}</p>
                                <p>{v.trackCount}首，by{v.creator.nickname}，播放{Tools.tranNumber(v.playCount,1)}次</p>
                            </span>
                                </li>
                            )):[].map(v=>{

                            })
                        }
                    </ul>
                    <h5 style={{display:playList?"block":"none"}} onClick={()=>{
                        this.props.history.push("SearchDetails/PlayList")
                    }}>{playList?playList.moreText:""} </h5>
                </div>
                <div className={"composite_log"}>
                    <h5 style={{display:mlog?"block":"none"}}>Mlog</h5>
                    <ul>
                        {
                            mlog?mlog.mlogs.map(v=>(
                                <li key={v.id}>
                                    <p><img src={v.resource.mlogBaseData.coverUrl} alt=""/></p>
                                    <p>{v.resource.mlogBaseData.text}</p>
                                    <p>
                                        <span><img src={v.resource.userProfile.avatarUrl} alt=""/></span>
                                        <span>{v.resource.userProfile.nickname}</span>
                                        <span>{v.resource.mlogExtVO.likedCount}赞</span>
                                    </p>
                                </li>
                            )):[].map(v=>{

                            })
                        }
                    </ul>
                    <h5 style={{display:mlog?"block":"none"}}>{mlog?mlog.moreText:""}</h5>
                </div>
                <div className={"composite_songwriter"}>
                    <h5 style={{display:artist?"block":"none"}}>歌手</h5>
                    <ul>
                        {
                            artist?artist.artists.map(v=>(
                                <li key={v.id}>
                            <span>
                                <img src={v.img1v1Url} alt=""/>
                            </span>
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
                    <h5 style={{display:artist?"block":"none"}} onClick={()=>{
                        this.props.history.push("SearchDetails/SongWriter")
                    }}>{artist?artist.moreText:""}</h5>
                </div>
                <div className={"composite_album"}>
                    <h5 style={{display:album?"block":"none"}}>专辑</h5>
                    <ul>
                        {
                            album?album.albums.map(v=>(
                                <li key={v.id}>
                                    <span><img src={v.blurPicUrl} alt=""/></span>
                                    <span>
                                <p>{v.name}</p>
                                <p>
                                    <b>{v.artists[0].name}，</b>
                                    <b>{Tools.date(v.publishTime)}</b>
                                </p>
                            </span>
                                </li>
                            )):[].map(v=>{

                            })
                        }
                    </ul>
                    <h5 style={{display:album?"block":"none"}} onClick={()=>{
                        this.props.history.push("SearchDetails/Album")
                    }}>{album?album.moreText:""}</h5>
                </div>
                <div className={"composite_radio"}>
                    <h5 style={{display:djRadio?"block":"none"}}>电台</h5>
                    <ul>
                        {
                            djRadio?djRadio.djRadios.map(v=>(
                                <li key={v.id}>
                                    <span><img src={v.picUrl} alt=""/></span>
                                    <span>
                                <p>{v.name}</p>
                                <p>{v.dj.nickname}</p>
                            </span>
                                </li>
                            )):[].map(v=>{

                            })
                        }

                    </ul>
                    <h5 style={{display:djRadio?"block":"none"}} onClick={()=>{
                        this.props.history.push("SearchDetails/RadioStation")
                    }}>{djRadio?djRadio.moreText:""}</h5>
                </div>
                <div className={"composite_user"}>
                    <h5 style={{display:user?"block":"none"}}>用户</h5>
                    <ul>
                        {
                            user? user.users.map(v => (
                                <li key={v.avatarUrl}>
                                    <span><img onError={(e) => {e.target.onerror = null;e.target.src="http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"}} src={v.avatarUrl} alt=""/></span>
                                    <span>
                                <p>{v.nickname}
                                    <i className={"sex_1"} style={{display:v.gender===1?"inline-block":"none"}}>♂</i>
                                    <i className={"sex_2"} style={{display:v.gender===2?"inline-block":"none"}}>♀</i>
                                </p>
                                <p>{v.signature}</p>
                            </span>
                                    <span className={"iconfont iconjiahao"}>关注</span>
                                </li>
                            )) : [].map(v => {

                            })
                        }
                    </ul>
                    <h5 style={{display:user?"block":"none"}} onClick={()=>{
                        this.props.history.push("/SearchDetails/UserHome")
                    }}>{user?user.moreText:""}</h5>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getCompositeList(localStorage._k)
    }
}
function mapStateToProps(state,props) {
    return{
        compositeList: state.search.compositeList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Composite)