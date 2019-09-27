import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "../assets/style/mineCloud/mainCloud.css"
import Swipers from '../components/MineCloud/Swiper';
import Type from '../components/MineCloud/Type';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import ProfileCreators from "../store/actionCreator/profile/index";
import Dialog from "./MyMusics/Dialog";
class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            isShow:true,
            isShow2:true
        }
    }
    render(){
        let num1=0,num2=0;
        const {playList}=this.props;
        playList.map(v=>{
            v.userId.toString()===localStorage.userId?num1++:num2++;
        })
        return(
            <>
               <Swipers></Swipers>
               <Type {...this.props}></Type>
               <div>
               <div className={"collMusic"}>
                    <div className={"collM1"}>
                        <span style={{transition:".1s ease-in",transform:this.state.isShow?"rotate(0deg)":"rotate(-90deg)"}} className={"iconfont iconarrow-bottom2 iconCollM1"} onClick={()=>this.setState({isShow:!this.state.isShow})}></span>
                        <p className={"weightFont"}>创建的歌单 <span>({num1})</span></p>
                    </div>
                    <div className={"collM2"}>
                    <Dialog {...this.props}></Dialog>
                    
                    <span className={"iconfont icondiandiandian iconCollM2"}></span>
                    </div>
                </div>
                   <div style={{display:this.state.isShow?"block":"none"}}>
                        {
                       playList.map((v,i)=>(
                           !(v.userId.toString()===localStorage.userId)?"":
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
                   <div className={"collMusic"}>
                       <div className={"collM1"}>
                           <span style={{transition:".1s ease-in",transform:this.state.isShow2?"rotate(0deg)":"rotate(-90deg)"}} className={"iconfont iconarrow-bottom2 iconCollM1"} onClick={()=>this.setState({isShow2:!this.state.isShow2})}></span>
                           <p className={"weightFont"}>收藏的歌单 <span>({num2})</span></p>
                       </div>
                       <div className={"collM2"}>
                       <span className={"iconfont iconjiahao iconCollM2"}></span>
                       <span className={"iconfont icondiandiandian iconCollM2"}></span>
                       </div>
                   </div>
                   <div style={{display:this.state.isShow2?"block":"none"}}>
                        {
                       playList.map((v)=>(
                        v.userId.toString()===localStorage.userId?"":
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
    addList(value){
        this.props.newList(value);
    }
    componentDidMount(){
            var mySwiper = new Swiper('.swiper-container',{
            freeMode : true,
            slidesPerView: "auto"
            })
            if(localStorage.userId){
                this.props.getPlayList();
                
            }else{
                alert("您好，请先登录");
            }
            
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