import React from 'react'
import '../../../assets/style/find/songlist.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import '../../../assets/style/find/banner.css'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from '../../../store/actionCreator/find/index'
class SongListBanner extends React.Component{
    render(){
        const {songListBanner,songListIntro} = this.props;
        return(
            <div>
                <div className="list_banner" style={{marginBottom:".56rem"}}>
                    <div className="swiper-container" style={{height:"100%"}}>
                        <div className="swiper-wrapper">
                            {
                                songListBanner.map(v=>(
                                    <div  className="swiper-slide" style={{width:"4.8rem"}} key={v.id}>
                                        <img style={{width:"100%",height:"80%"}} src={v.coverImgUrl} alt=""/>
                                        <p style={{marginTop:".2rem",fontSize:".3rem",color:"#383838"}}>{v.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    <ul className={"playlist_list"}>
                        {
                            songListIntro.map(v=>(
                                <li key={v.id} className={"playlist_s"}>
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
            </div>

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
    mySwiper(){
        setTimeout(() =>{
            new Swiper('.swiper-container', {
                autoplay: {
                    disableOnInteraction : false,
                },
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                loop:true,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflow: {
                    rotate: 30,
                    stretch: 10,
                    depth: 20,
                    modifier: 2,
                    slideShadows : true
                }
            })
        },100)
    }
    componentDidMount(){
        this.mySwiper();
        this.props.getSonglist_intro_banner()
        this.props.getSonglist_intro()

    }
}
function mapStateToProps(state,props) {
    return{
        songListBanner:state.find.songListBanner,
        songListIntro:state.find.songListIntro
    }
}
function mapDdispatchToProps(dispatch,props) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDdispatchToProps)(SongListBanner)