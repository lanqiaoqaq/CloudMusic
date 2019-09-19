import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "../assets/style/mineCloud/mainCloud.css"
import Swipers from '../components/MineCloud/Swiper';
import Type from '../components/MineCloud/Type';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import ProfileCreators from "../store/actionCreator/profile/index"
class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            isShow:true
        }
    }
    render(){
        const {playList}=this.props;
        return(
            <>
               <Swipers></Swipers>
               <Type {...this.props}></Type>
               <div>
                   <div className={"collMusic"}>
                       <div className={"collM1"}>
                           <span style={{transition:".1s ease-in",transform:this.state.isShow?"rotate(0deg)":"rotate(-90deg)"}} className={"iconfont iconarrow-bottom2 iconCollM1"} onClick={()=>this.setState({isShow:!this.state.isShow})}></span>
                           <p className={"weightFont"}>创建的歌单 <span>({"lalalal"})</span></p>
                       </div>
                       <div className={"collM2"}>
                       <span className={"iconfont iconjiahao iconCollM2"}></span>
                       <span className={"iconfont icondiandiandian iconCollM2"}></span>
                       </div>
                   </div>
                   <div style={{display:this.state.isShow?"block":"none"}}>
                        {
                       playList.map((v)=>(
                           <div key={v.id} className={"collList"} onClick={()=>this.props.history.push("/musiclist/"+v.id)}>
                                <div className={"collImg"}>
                                        <img className={"collBox"} src={v.coverImgUrl}/>
                                    
                                    <div className={"collMiddle"}>
                                        <span className={"collName"}>{v.name}</span>
                                        <span className={"collCheck"}>{v.trackCount}首 by {v.creator.nickname}</span>
                                    </div>
                                </div>
                                <span className={"iconfont icondiandiandian iconCollM2"}></span>
                            </div>
                       ))
                   }
                   </div>
                  
                   
               </div>
            </>
        )
    }
    componentDidMount(){
            var mySwiper = new Swiper('.swiper-container',{
            freeMode : true,
            slidesPerView: "auto"
            })
            this.props.getPlayList();
    }
}
function mapStateToProps(state,props){
    return {
        playList:state.profile.cyPlaylist
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(ProfileCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);