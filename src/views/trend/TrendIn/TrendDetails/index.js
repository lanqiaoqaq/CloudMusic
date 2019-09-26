import React from "react";
import {
    NavLink,Route,withRouter
} from "react-router-dom";
import {getPlayerTime, getTrendTime, getVideoLong} from "../../../../tools/date";
class TrendDetails extends React.Component{
    render() {
        return(
            <div>动态详情</div>
        )
    }

    // render() {
    //     const json=JSON.parse(v.json);
    //     // console.log(json);
    //     let type;//动态类型
    //     switch (v.type) {
    //         case 22:type="转发";break;
    //         case 39:type="发布视频";break;
    //         case 35:type="";break;
    //         case 18:type="分享单曲";break;
    //         case 17:type="分享电台节目";break;
    //     }
    //
    //     const event=v.json?this.getJson(v.json).event:"";
    //     const json1=event?this.getJson(event.json):"";
    //     const bground={
    //         background: `url(${json.video?json.video.coverUrl:""})`,
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "0 0"
    //     };
    //     const bground1={
    //         background: `url(${json1?json1.video?json1.video.coverUrl:"":""})`,
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "0 0"
    //     };
    //     return(
    //         <div onClick={()=>{
    //             this.props.history.push("/trendDetails/"+v.info.threadId);
    //         }} className={"ra_box1"}>
    //             <div className={"ra_box1in"}>
    //                 <div onClick={(e)=>{
    //                     e.stopPropagation();
    //                     this.props.history.push("/userInfo/"+v.user.userId)
    //                 }} className={"ra_Avatar"}>
    //                     <img src={v.user.avatarUrl}/>
    //                 </div>
    //                 <div className={"ra_Content"}>
    //                     <div className={"ra_Content_1"}>
    //                         <p><Link className={"ra_Content_userName"} to={"/userInfo"}>{v.user.nickname} </Link><span>{type}:</span></p>
    //                         <h2>{getTrendTime(v.eventTime)}</h2>
    //                     </div>
    //                     {/************中间内容**************/}
    //                     <div className={"ra_Content_2"}>
    //                         {/************文字**************/}
    //                         <div className={"ra_Content_2_word"}>{json.msg}</div>
    //                         {/************图片**************/}
    //                         <div className={"ra_Content_2_1img"} style={{display:v.pics.length>0?"block":"none"}}>
    //                             {
    //                                 v.pics?v.pics.map((v1,i)=>(
    //                                     <img className={this.getClassName(v.pics.length,i)} src={v1.originUrl} alt=""/>
    //                                 )):[]
    //                             }
    //
    //                         </div>
    //                         {/************视频**************/}
    //                         <div className={"ra_Content_2_vedio_s"} style={{display:v.type===39?"block":"none"}}>
    //                             <video poster={"j.jpg"} style={bground} controls src={url[i]}></video>
    //                             <span className={"ra_Content_2_vedio_s_one iconfont iconyousanjiao-wangyiicon"}>{getPlayerTime(json.video?json.video.playTime:"")}</span>
    //                             <span className={"ra_Content_2_vedio_s_two"}>{getVideoLong(json.video?json.video.size:"")}</span>
    //                         </div>
    //                         {/************歌曲**************/}
    //                         <div onClick={(e)=>{
    //                             e.stopPropagation();
    //                             this.props.history.push({
    //                                 pathname:"/musicplaying",
    //                                 state:{
    //                                     id:json.song?json.song.id:""
    //                                 }
    //                             })
    //                         }} className={"ra_Content_2_song"} style={{display:v.type===18?"block":"none"}}>
    //                             <div className={"ra_Content_2_song_in"}>
    //                                 <img src={cover[i]}/>
    //                                 <span className={"iconfont iconicon-"}></span>
    //                                 <div>
    //                                     <p>{json.song?json.song.name:""}</p>
    //                                     <h2>{
    //                                         json.song?json.song.artists.map((v2,i)=>(
    //                                             v2.name
    //                                         )):[]
    //                                     }</h2>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         {/************电台**************/}
    //                         <div className={"ra_Content_2_song"} style={{display:v.type===17?"block":"none"}}>
    //                             <div className={"ra_Content_2_song_in"}>
    //                                 <img src={json.program?json.program.coverUrl:""}/>
    //                                 <div>
    //                                     <p>{json.program?json.program.description:""}</p>
    //                                     <h2><span>{json.program?json.program.radio.category:""}</span>{json.program?json.program.radio.name:""}</h2>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //                         {/****************************转发********************************/}
    //                         <div className={"ra_zhuanfa"} style={{display:v.type===22?"block":"none"}}>
    //
    //                             <div className={"ra_box1"}>
    //                                 <div className={"ra_box1in"}>
    //                                     <div onClick={()=>{
    //                                         this.props.history.push("/userInfo/"+event?event.user.userId:"")
    //                                     }} className={"ra_Avatar"}>
    //                                         <img src={event?event.user.avatarUrl:""}/>
    //                                     </div>
    //                                     <div className={"ra_Content"}>
    //                                         <div className={"ra_Content_1"}>
    //                                             <p><Link className={"ra_Content_userName"} to={"/userInfo"}>{event?event.user.nickname:""} </Link><span>{this.getType(event?event.type:"")}:</span></p>
    //                                         </div>
    //                                         {/************中间内容**************/}
    //                                         <div className={"ra_Content_2"}>
    //                                             {/************文字**************/}
    //                                             <div className={"ra_Content_2_word"}>{json1?json1.msg:""}</div>
    //                                             {/************图片**************/}
    //                                             <div className={"ra_Content_2_1img"} style={{display:(event?event.pics:"").length>0?"block":"none"}}>
    //                                                 {
    //                                                     event?event.pics?event.pics.map((v1,i)=>(
    //                                                         <img className={this.getClassName(event?event.pics.length:"",i)} src={v1.originUrl} alt=""/>
    //                                                     )):[]:[]
    //                                                 }
    //
    //                                             </div>
    //                                             {/************视频**************/}
    //                                             <div className={"ra_Content_2_vedio_s"} style={{display:(event?event.type:"")===39?"block":"none"}}>
    //                                                 <video poster={"j.jpg"} style={bground1} controls src={""}></video>
    //                                                 <span className={"ra_Content_2_vedio_s_one iconfont iconyousanjiao-wangyiicon"}>{getPlayerTime(json1?json1.video?json1.video.playTime:"":"")}</span>
    //                                                 <span className={"ra_Content_2_vedio_s_two"}>{getVideoLong(json1?json1.video?json1.video.size:"":"")}</span>
    //                                             </div>
    //                                             {/************歌曲**************/}
    //                                             <div className={"ra_Content_2_song"} style={{display:(event?event.type:"")===18?"block":"none"}}>
    //                                                 <div className={"ra_Content_2_song_in"}>
    //                                                     <img src={json1?json1.song?json1.song.album.picUrl:"":""}/>
    //                                                     <span className={"iconfont iconicon-"}></span>
    //                                                     <div>
    //                                                         <p>{json1?json1.song?json1.song.name:"":""}</p>
    //                                                         <h2>{
    //                                                             json1?json1.song?json1.song.artists.map((v2,i)=>(
    //                                                                 v2.name
    //                                                             )):[]:[]
    //                                                         }</h2>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             {/************电台**************/}
    //                                             <div className={"ra_Content_2_song"} style={{display:(event?event.type:"")===17?"block":"none"}}>
    //                                                 <div className={"ra_Content_2_song_in"}>
    //                                                     <img src={json1?json1.program?json1.program.coverUrl:"":""}/>
    //                                                     <div>
    //                                                         <p>{json1?json1.program?json1.program.description:"":""}</p>
    //                                                         <h2><span>{json1?json1.program?json1.program.radio.category:"":""}</span>{json1?json1.program?json1.program.radio.name:"":""}</h2>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //
    //                                             {/****************************转发********************************/}
    //                                             <div style={{display:v.type===22?"block":"none"}}>
    //
    //
    //                                             </div>
    //                                             {/*****************************转发*******************************/}
    //
    //
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //
    //                         </div>
    //                         {/*****************************转发*******************************/}
    //
    //
    //                     </div>
    //                     <div style={{display:v.rcmdInfo?v.rcmdInfo.reason?"block":"none":"none"}}  className={"ra_Content_origin"}>——{v.rcmdInfo?v.rcmdInfo.reason:""}</div>
    //                     <div  className={"ra_Content_3"}>
    //                         <div style={{color:v.info?v.info.liked?"red":"#8b8585":"#8b8585"}} onClick={this.props.resourceLike.bind(this,{type:6,threadId:v.info?v.info.threadId:"",t:v.info?v.info.liked?"0":"1":""})} className={"ra_Content_3_like"}><span className={"iconfont iconthumb"}></span><span>{v.info?v.info.likedCount:""}</span></div>
    //
    //                         <div className={"ra_Content_3_com"}><span className={"iconfont iconicon_comments"}></span><span>{v.info?v.info.commentCount:""}</span></div>
    //
    //                         <div onClick={(e)=>{
    //                             e.stopPropagation();
    //                             this.props.history.push("/relayTrends/"+v.id+"/"+(v.user?v.user.userId:""))}
    //                         } className={"ra_Content_3_share"}><span className={"iconfont iconforward"}><span>{v.info?v.info.shareCount:""}</span></span></div>
    //
    //                         <div  onClick={(e)=>{
    //                             e.stopPropagation();
    //                             console.log("das");
    //                             document.querySelector(".ra_trendIn_delete").style.display="block";
    //                             document.querySelector(".ra_trendIn_delete").setAttribute("comId",v.id);
    //                         }}  className={"ra_Content_3_more"}><span className={"iconfont icondiandiandian"}></span></div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}
export default TrendDetails;