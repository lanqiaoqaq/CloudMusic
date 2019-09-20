import React from "react"
import trendCreator from "../../../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "../../../../assets/style/trend/mvDetails.css"
import {getPlayerTime, getVideoLong} from "../../../../tools/date";
import {getDate} from "../../../../tools/date";

class MvDetails extends React.Component{
    constructor(){
        super();
        this.state={
            mvdd:"",
            artists:[],
            pic:{},
            comments:[],
            hotComments:[]
        }
    }

    render() {
        // console.log(this.props,123);
        // console.log(this.props.mvDetails,this.props.mvBrs);
        // console.log(this.state.mvdd);
        const {mvdd,artists,hotComments,comments}=this.state;
        // console.log(this.state)
        const {mvDetails,mvBrs,singerPic1,relatedVideos,mvComments}=this.props;
        // console.log(mvdd)
        // console.log(singerPic1);
        // console.log(relatedVideos,"相关视频");
        // console.log(hotComments,"热评");
        // console.log(comments,"全部评论");
        const bground={
            background: `url(${mvDetails.data?mvDetails.data.cover:""})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "0 0"
        };
        return(
            <>
                {
                    <div className={"ra_mvdetails_video_out"}>
                        <video className={"ra_mvdetails_video"} poster={"j.jpg"} controls style={bground} src={mvDetails.data?mvDetails.data.brs[mvBrs[0]]:""}>
                        </video>
                        <select value={mvBrs[0]+"P"} onChange={this.props.changeMvBrs.bind(this,mvDetails.data?mvDetails.data.id:"")}>
                            <option value={"240P"}>240P</option>
                            <option value={"480P"}>480P</option>
                            <option value={"720P"}>720P</option>
                            <option value={"1080P"}>1080P</option>
                        </select>
                    </div>
                }

                <div className={"ra_mvdetails_title"}>
                    <div className={"ra_mvdetails_title_top"}>
                        <div className={"ra_mvdetails_title_top_l"}>
                            <p>{mvdd.artistName}</p>
                            <div>
                                <span className={"ra_mvdetails_title_top_l_span1"}>发布：{mvdd.publishTime}</span>|
                                <span className={"ra_mvdetails_title_top_l_span2"}>播放：{getPlayerTime(mvdd.playCount)}</span>
                            </div>
                        </div>
                        <span onClick={()=>{
                            if(document.querySelector(".ra_mvdetails_title_bottom").style.display==="block"){
                                document.querySelector(".ra_mvdetails_title_bottom").style.display="none";
                                document.querySelector(".ra_mvdetails_title_top_s").className="ra_mvdetails_title_top_s iconfont iconln_sanjiaoxia"
                            }else{
                                document.querySelector(".ra_mvdetails_title_bottom").style.display="block";
                                document.querySelector(".ra_mvdetails_title_top_s").className="ra_mvdetails_title_top_s iconfont iconln_sanjiaoshang"

                            }
                        }} className={"ra_mvdetails_title_top_s iconfont iconln_sanjiaoxia"}>
                        </span>
                    </div>
                    <div style={{display:"none"}} className={"ra_mvdetails_title_bottom"}>{mvdd.desc}</div>
                </div>
                {/*点赞评论收藏*/}
                <div className={"ra_mvdetails_thum"}>
                    <div><span className={"iconfont iconthumb"}></span><p>{mvdd.likeCount}</p></div>
                    <div><span className={"iconfont iconshoucang"}></span><p>{mvdd.subCount}</p></div>
                    <div><span className={"iconfont iconpinglun"}></span><p>{mvdd.commentCount}</p></div>
                    <div><span className={"iconfont iconfenxiang"}></span><p>{mvdd.shareCount}</p></div>
                </div>
                {/*作者*/}
                <div style={{display:"none"}} className={"ra_mvdetails_Mask"}>
                    <div className={"ra_mvdetails_Mask_1"}>请选择要查看的歌手</div>
                    {
                        mvdd.artists?mvdd.artists.map((v,i)=>(
                            <div onClick={()=>{
                                this.props.history.push("/userInfo/"+mvdd.artists[i].id);
                            }} className={"ra_mvdetails_Mask_in"}><img src={singerPic1[i]}/><span>{v.name}</span></div>
                        )):[].map(()=>{})
                    }
                </div>
                <div onClick={()=>{
                    if(mvdd.artists.length>1){
                        if(document.querySelector(".ra_mvdetails_Mask").style.display==="block"){
                            document.querySelector(".ra_mvdetails_Mask").style.display="none";
                        }else{
                            document.querySelector(".ra_mvdetails_Mask").style.display="block";
                        }
                    }else if(mvdd.artists.length===1){
                        this.props.history.push("/userInfo/"+mvdd.artists[0].id);
                    }

                }} className={"ra_mvdetails_artist"}>
                    <div className={"ra_mvdetails_artist_pic"}>
                        {
                            singerPic1.map((v,i)=>(
                                <img style={{position:"absolute",left:0.2+i*0.5+"rem",top:"0.2rem",zIndex:-i+5}} src={v}/>
                            ))
                        }
                    </div>
                    <div className={"ra_mvdetails_artist_name"}>
                        {
                            artists.map((v,i)=>(
                                <span key={v.id}>{i===0?"":"/"}{v.name}</span>
                            ))
                        }
                    </div>
                    <div className={"ra_mvdetails_artist_sc"}>
                        +收藏
                    </div>
                </div>

                <div className={"ra_mvdetails_recom"}>相关推荐</div>
                {/*相关推荐*/}
                <div className={"ra_mvdetails_recom_s"}>
                    {
                        relatedVideos.map((v,i)=>(
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

                <div className={"ra_mvdetails_recom"}>精彩评论</div>

                <div className={"ra_mvdetails_new_discuss"}>
                    {
                        hotComments.map((v,i)=>(
                            <div className={"ra_mvdetails_new_discuss_in"}>
                                <div className={"ra_mvdetails_new_discuss_in_user"}>
                                    <img  onClick={()=>{
                                        if(v.user.userId)
                                        this.props.history.push("/userInfo/"+v.user.userId)
                                    }} src={v.user?v.user.avatarUrl:""} alt=""/>
                                    <div className={"ra_mvdetails_new_discuss_in_user_s"}>
                                        <p>{v.user?v.user.nickname:""}</p>
                                        <p>{getDate(v.time)}</p>
                                    </div>
                                    <div className={"ra_mvdetails_new_discuss_in_user_z"}>{v.likedCount}  <span className={"iconfont iconthumb"}></span></div>
                                </div>
                                <div className={"ra_mvdetails_new_discuss_content"}>{v.content}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={"ra_mvdetails_recom"}>最新评论</div>
                <div className={"ra_mvdetails_new_discuss"}>
                    {
                        comments.map((v,i)=>(
                            <div className={"ra_mvdetails_new_discuss_in"}>
                                <div className={"ra_mvdetails_new_discuss_in_user"}>
                                    <img src={v.user?v.user.avatarUrl:""} alt=""/>
                                    <div className={"ra_mvdetails_new_discuss_in_user_s"}>
                                        <p>{v.user?v.user.nickname:""}</p>
                                        <p>{getDate(v.time)}</p>
                                    </div>
                                    <div className={"ra_mvdetails_new_discuss_in_user_z"}>{v.likedCount}  <span className={"iconfont iconthumb"}></span></div>
                                </div>
                                <div className={"ra_mvdetails_new_discuss_content"}>{v.content}</div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
    componentDidMount() {
        const mvId=Number(this.props.match.params.id);
        this.props.getMvDetails(mvId);
        // console.log(this.props.mvBrs)
        console.log("aaa")
        document.querySelector("video").currentTime=this.props.mvBrs[1];
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            mvdd:nextProps.mvDetails.data,
            artists:nextProps.mvDetails.data.artists,
            pic:nextProps.mvDetails.data.artists[0],
            comments:nextProps.mvComments.comments||[],
            hotComments:nextProps.mvComments.hotComments||[]
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.props.mvBrs,123);
        document.querySelector("video").currentTime=this.props.mvBrs[1];
    }
}
export default connect(state=>({mvDetails:state.trend.mvDetails,mvBrs:state.trend.mvBrs,singerPic1:state.trend.singerPic1,relatedVideos:state.trend.relatedVideos,mvComments:state.trend.mvComments}),dispatch=>bindActionCreators(trendCreator,dispatch))(MvDetails)







