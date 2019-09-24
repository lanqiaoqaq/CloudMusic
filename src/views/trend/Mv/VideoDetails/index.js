import React from "react";
import {getDate, getPlayerTime, getpubDate, getVideoLong} from "../../../../tools/date";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import trendCreator from "../../../../store/actionCreator/trend";
class VideoDetails extends React.Component{
    constructor(){
        super();
        this.state={
            videoDetails:{},
            pic:"",
            related:[],
            comment:{},
            vurl:""
        }
    }
    render(){
        console.log("render");
        const {videoDetails,pic,related,comment,vurl}=this.state;
        // console.log(comment);
        // console.log(this.props.videoDetails,this.props,this.state);

        const bground={
            background: `url(${videoDetails.coverUrl})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "0 0"
        };

        const lable=videoDetails.videoGroup?"block":"none";//有没有小标签
        return(
            <>

                {/*********************回复评论************************/}
                <div style={{display:"none"}} className={"ra_mvdetails_addcom1"}>
                    <input className={"ra_mvdetails_addcom_in1"} placeholder={"写评论"} type="text"/>
                    <span onClick={
                        this.props.addCom.bind(this,{t:2,type:5,id:this.props.match.params.id,commentId:document.querySelector(".ra_mvdetails_addcom1"),content1:document.querySelector(".ra_mvdetails_addcom_in1")})} className={"ra_mvdetails_new_discuss_in1"} className={"iconfont iconjiantou-copy"}></span>
                </div>
                {/************************发评论*********************/}

                <div className={"ra_mvdetails_addcom"}>
                    <input className={"ra_mvdetails_addcom_in"} placeholder={"写评论"} type="text"/>
                    <span onClick={this.props.addCom.bind(this,{t:1,type:5,id:this.props.match.params.id,commentId:"",content1:document.querySelector(".ra_mvdetails_addcom_in")})} className={"iconfont iconjiantou-copy"}></span>
                </div>
                {/************************视频*********************/}
                {
                    <div className={"ra_mvdetails_video_out"}>
                        <video className={"ra_mvdetails_video"} poster={"j.jpg"} controls style={bground} src={vurl}>
                        </video>
                        <select value={"240P"}>
                            <option value={"240P"}>240P</option>
                            <option value={"480P"}>480P</option>
                            <option value={"720P"}>720P</option>
                            <option value={"1080P"}>1080P</option>
                        </select>
                    </div>
                }
                {/************************小简介**********************************/}
                <div className={"ra_mvdetails_title"}>
                    <div className={"ra_mvdetails_title_top"}>
                        <div className={"ra_mvdetails_title_top_l"}>
                            <p className={"ra_mvdetails_title_top_p"}>{videoDetails.title}</p>
                            <div>
                                <span className={"ra_mvdetails_title_top_l_span1"}>发布：{getpubDate(videoDetails.publishTime)}</span>|
                                <span className={"ra_mvdetails_title_top_l_span2"}>播放：{getPlayerTime(videoDetails.playTime)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************视频标签****不能点***************************/}
                <div style={{display:{lable}}} className={"ra_mvdetails_lable"}>
                    {
                        videoDetails.videoGroup?videoDetails.videoGroup.map((v,i)=>(
                            <div className={"ra_mvdetails_lable_sq"} key={v.id}>
                                {v.name}
                            </div>
                        )):[].map(()=>{})
                    }
                </div>
                {/*******************点赞评论收藏***********************************/}

                <div className={"ra_mvdetails_thum"}>
                    <div><span className={"iconfont iconthumb"}></span><p>{videoDetails.praisedCount}</p></div>
                    <div><span className={"iconfont iconshoucang"}></span><p>{videoDetails.subscribeCount}</p></div>
                    <div><span className={"iconfont iconpinglun"}></span><p>{videoDetails.commentCount}</p></div>
                    <div><span className={"iconfont iconfenxiang"}></span><p>{videoDetails.shareCount}</p></div>
                </div>

                {/******************作者的简介*******************/}
                <div onClick={(e)=>{
                    if(e.target===document.querySelector(".ra_mvdetails_artist")){
                        this.props.history.push("/userInfo/"+videoDetails.creator.userId);
                    }
                }} className={"ra_mvdetails_artist"}>
                    <div className={"ra_mvdetails_artist_pic"}>
                        <img style={{position:"absolute",left:"0.2rem",top:"0.2rem"}} src={videoDetails.creator?videoDetails.creator.avatarUrl:""}/>
                    </div>
                    <div className={"ra_mvdetails_artist_name"}>
                        <span>{videoDetails.creator?videoDetails.creator.nickname:""}</span>
                    </div>
                    <div onClick={this.props.isFollow.bind(this,{type:videoDetails.creator?videoDetails.creator.followed?0:1:"",id:videoDetails.creator?videoDetails.creator.userId:"",vid:this.props.match.params.id})} className={"ra_mvdetails_artist_sc"}>
                        {videoDetails.creator?videoDetails.creator.followed?"已关注":"+关注":""}
                    </div>
                </div>

                {/***********************相关推荐****************************/}
                <div className={"ra_mvdetails_recom"}>相关推荐</div>
                {/*相关推荐*/}
                <div className={"ra_mvdetails_recom_s"}>
                    {
                        related.map((v,i)=>(
                            <div onClick={()=>{
                                if(v.type){
                                    this.props.history.push("/videoDetails/"+v.vid)
                                }else{
                                    this.props.history.push("/mvDetails/"+v.vid)
                                }
                            }} className={"ra_mvdetails_recom_s_in"}>
                                <div className={"ra_mvdetails_recom_s_in_img"}>
                                    <img src={v.coverUrl}/>
                                    <div className={"ra_mvdetails_recom_play"}><span className={"iconfont iconbofang3"}>{getPlayerTime(v.playTime)}</span></div>
                                </div>
                                <div className={"ra_mvdetails_recom_s_in_info"}>
                                    <p><span style={{display:v.type?"none":""}} className={"ra_mvdetails_recom_s_in_info_mv"}>MV </span>{v.title}</p>
                                    <h2>{getVideoLong(v.durationms)}  by  {v.creator.map((v1,i)=>(
                                        ((i===0)?"":"/")+v1.userName
                                    ))}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/***********************热评****************************/}
                <div onClick={()=>{
                    document.querySelector(".ra_mvdetails_addcom1").style.display="none"
                }} className={"ra_mvdetails_recom"}>精彩评论</div>

                <div className={"ra_mvdetails_new_discuss"}>
                    {
                        comment.hotComments?comment.hotComments.map((v,i)=>(
                            <div onClick={(e)=>{
                                if(e.target===document.querySelector(".ra_asdf")){
                                    document.querySelector(".ra_mvdetails_addcom1").style.display="block";
                                    document.querySelector(".ra_mvdetails_addcom1").setAttribute("commentId",v.commentId);
                                }
                            }
                            }  className={"ra_asdf"}>
                                <div className={"ra_mvdetails_new_discuss_in_user"}>
                                    <img  onClick={()=>{
                                        if(v.user.userId)
                                            this.props.history.push("/userInfo/"+v.user.userId)
                                    }} src={v.user?v.user.avatarUrl:""} alt=""/>
                                    <div className={"ra_mvdetails_new_discuss_in_user_s"}>
                                        <p>{v.user?v.user.nickname:""}</p>
                                        <p>{getDate(v.time)}</p>
                                    </div>
                                    <div onClick={this.props.isLike.bind(this,{t:v.liked?0:1,id:videoDetails.vid,type:5,cid:v.commentId})} style={{
                                        color:v.liked?"red":"#8b8585"
                                    }} className={"ra_mvdetails_new_discuss_in_user_z"}>{v.likedCount}  <span  className={"iconfont iconthumb"}></span></div>
                                </div>
                                <div className={"ra_mvdetails_new_discuss_content"}>{v.content}</div>
                            </div>
                        )):[]
                    }
                </div>
                {/****************************最新评论*******************/}
                <div onClick={()=>{
                    document.querySelector(".ra_mvdetails_addcom1").style.display="none";
                }} className={"ra_mvdetails_recom"}>最新评论</div>
                <div className={"ra_mvdetails_new_discuss"}>
                    {
                        comment.comments?comment.comments.map((v,i)=>(
                            <div onClick={(e)=>{
                                if(e.target===document.querySelector(".ra_mvdetails_new_discuss_in")){
                                    document.querySelector(".ra_mvdetails_addcom1").style.display="block";
                                    document.querySelector(".ra_mvdetails_addcom1").setAttribute("commentId",v.commentId);
                                }
                            }
                            } className={"ra_mvdetails_new_discuss_in"}>
                                <div className={"ra_mvdetails_new_discuss_in_user"}>
                                    <img src={v.user?v.user.avatarUrl:""} alt=""/>
                                    <div className={"ra_mvdetails_new_discuss_in_user_s"}>
                                        <p>{v.user?v.user.nickname:""}</p>
                                        <p>{getDate(v.time)}</p>
                                    </div>
                                    <div onClick={this.props.isLike.bind(this,{t:v.liked?0:1,id:videoDetails.vid,type:5,cid:v.commentId})} style={{
                                        color:v.liked?"red":"#8b8585"
                                    }} className={"ra_mvdetails_new_discuss_in_user_z"}>{v.likedCount}<span className={"iconfont iconthumb"}></span></div>
                                </div>
                                <div>
                                    <div className={"ra_mvdetails_new_discuss_content"}>{v.content}</div>
                                    <div style={{background:"#9f9f9f",marginLeft:"1rem",width:"80%",lineHeight:"1rem",fontSize:"0.36rem"}}>{v.beReplied.length>0?("@"+v.beReplied[0].user.nickname+":"+v.beReplied[0].content):""}</div>

                                </div>

                            </div>
                        )):[]
                    }
                </div>
            </>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps");
        console.log(this.props.videoDetails===nextProps.videoDetails,"******");
        if(this.props.videoDetails===nextProps.videoDetails){//同路由跳转执行不到componentDidMount，先判断数据有没有改变，没改变执行componentDidMount
            setTimeout(()=>{
                this.props.getVideoDetails(this.props.match.params.id);
            },50);
        }
        this.setState({
            videoDetails:nextProps.videoDetails.videoDetails.data,
            pic:nextProps.videoDetails.pic,
            related:nextProps.videoDetails.related,
            comment:nextProps.videoDetails.comment,
            vurl:nextProps.videoDetails.vurl
        })
    }

    componentDidMount() {
        const vId=this.props.match.params.id;
        // console.log(vId,this.props.match.params)
        this.props.getVideoDetails(vId);
    }
}
export default connect(state=>({videoDetails:state.trend.videoDetails}),dispatch=>bindActionCreators(trendCreator,dispatch))(VideoDetails);