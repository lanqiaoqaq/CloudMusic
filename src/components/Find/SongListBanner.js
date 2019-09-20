import React from 'react'
import '../../assets/style/find/songlist.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import '../../assets/style/find/banner.css'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from '../../store/actionCreator/find/index'
class SongListBanner extends React.Component{
    render(){
        console.log(this.props.songListBanner)
        const songListBanner = this.props.songListBanner;
        return(
            <div className="list_banner">
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
        )
    }
    mySwiper(){
        setTimeout(() =>{
            new Swiper('.swiper-container', {

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

    }
}
function mapStateToProps(state,props) {
    return{
        songListBanner:state.find.songListBanner
    }
}
function mapDdispatchToProps(dispatch,props) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDdispatchToProps)(SongListBanner)