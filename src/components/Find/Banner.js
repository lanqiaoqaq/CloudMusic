import React from 'react'
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
class Banner extends  React.Component{
    render(){
        //console.log(this.props.banners,"render")
        const banners = this.props.banners;
        return(
            <div className="swiper-container" style={{height:"100%",width:"100%"}}>
                <div className="swiper-wrapper">
                    {
                        banners.map(v=>(
                            <div className="swiper-slide" key={v.targetId}>
                                <img style={{height:"100%",width:"100%",borderRadius:"10px"}} src={v.pic} alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    mySwiper(){
        setTimeout(() =>{
            new Swiper('.swiper-container', {
                autoplay: {
                    disableOnInteraction : false,
                },
                observer: true,
                observeParents: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                paginationClickable :true,
            })
        },100)
    }
    componentDidMount(){

        this.mySwiper();
        this.props.getBannerPic()
    }
}
function mapStateToProps(state,props) {
    return{
        banners:state.find.banners
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Banner)