import React from 'react';
import '../../assets/style/find/dailyspe.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DailyCreator from '../../store/actionCreator/find'
class DailySpecial extends React.Component{
    render(){
        console.log(this.props.recommendSongs);
        const recommendSongs = this.props.recommendSongs;
        return(
            <div className="daily_sps">
                <div style={{background:"url('http://p1.music.126.net/ZSJwl1HHogViPH2hJ95S_w==/109951164375415456.jpg')",backgroundSize:"100% 100%"}}>
                    <div style={{padding:"0 0.44rem 0 0.44rem"}}>
                        <div className="back_s" onClick={()=>{
                            this.props.history.push("/")
                        }}>
                            <i className=" iconfont iconzuojiantou">
                                <b>每日推荐</b>
                            </i>
                            <i className="iconfont iconwenhao"></i>
                        </div>
                        <div className="date_s">
                    <span>
                        <b className="day_s">20</b>
                        <b className="month_s">/ 09</b>
                    </span>
                        </div>
                        <div className="history_coms">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="dsonglist_s" style={{padding:"0 0.44rem 0 0.44rem"}}>
                    <div className="playall_s">
                        <span>
                            <i className="iconfont iconbofang"></i>
                            <b>播放全部</b>
                        </span>
                        <span>
                            <i className="iconfont iconduoxuan"></i>
                            <b>多选</b>
                        </span>
                    </div>
                    <ul >
                        {
                            recommendSongs.map(v=>(
                                <li className="dauly_song_s" key={v.id} onClick={()=>{
                                    this.props.history.push({ pathname:'/musicplaying',state:{id:v.id}})
                                }}>
                                    <div className="song_info_s">
                                <span className="song_img_s">
                                    <img src={v.album.picUrl} style={{height:"100%",width:"100%"}} alt=""/>
                                </span>
                                        <span>
                                    <p>{v.name}</p>
                                    <p>
                                        <b>{v.artists[0].name} - </b>
                                        <b>{v.album.name}</b>
                                    </p>
                                </span>
                                    </div>
                                    <div className="song_icon_s ">
                                        <i className="iconfont iconbofang1"></i>
                                        <i className="iconfont icondiandiandian"></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRecommendSongs();
    }
}
function mapStateToProps(state,props) {
    return{
        recommendSongs:state.find.recommendSongs
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(DailyCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(DailySpecial)