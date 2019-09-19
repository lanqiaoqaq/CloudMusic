import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "../assets/style/mineCloud/mainCloud.css"
import Swipers from '../components/MineCloud/Swiper';
import Type from '../components/MineCloud/Type';
class Profile extends React.Component{
    render(){
        return(
            <div>
               <Swipers></Swipers>
               <Type {...this.props}></Type>
               <div>
                   <div className={"collMusic"}>
                       <div className={"collM1"}>
                           <span className={"iconfont iconarrow-bottom2 iconCollM1"}></span>
                           <p className={"weightFont"}>创建的歌单 <span>({"lalalal"})</span></p>
                       </div>
                       <div className={"collM2"}>
                       <span className={"iconfont iconjiahao iconCollM2"}></span>
                       <span className={"iconfont icondiandiandian iconCollM2"}></span>
                       </div>
                   </div>
                   <div className={"collList"} onClick={()=>this.props.history.push("/musicList")}>
                       <div className={"collImg"}>
                          <div className={"collBox"}></div>
                           <div className={"collMiddle"}>
                               <span className={"collName"}>我喜欢的音乐</span>
                               <span className={"collCheck"}>我喜欢的音乐</span>
                           </div>
                       </div>
                       <span className={"iconfont icondiandiandian iconCollM2"}></span>
                   </div>
               </div>
            </div>
        )
    }
    componentDidMount(){
            var mySwiper = new Swiper('.swiper-container',{
            freeMode : true,
            slidesPerView: "auto"
            })
    }
}
export default Profile;