import React from "react";
import BScroll from 'better-scroll';
import {
    NavLink,Route,Link
} from "react-router-dom";
import axios from  "axios"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "../../../assets/style/trend/MyAtention.css";
import "../../../assets/style/trend/trendBar.css"
import trendCreator from "../../../store/actionCreator/trend";
import {getDate, getPlayerTime, getTime, getTrendTime, getVideoLong,tools} from "../../../tools/date";
class TrendIn extends React.Component{
    constructor(){
        super();
        this.state={
            page:1,
            isLoading:true,
            follow:[],
            trends:[],
            url:[],
            cover:[]
        }
    }
    render() {
        if(this.state.isLoading){
            return (
                <div style={{fontSize:"1rem",width:"100%",textAlign:"center"}}>
                    加载中...
                </div>
            )
        }
        // console.log("render");
        // const bground={
        //     background: `url(${videoDetails.coverUrl})`,
        //     backgroundSize: "100% 100%",
        //     backgroundPosition: "0 0"
        // };
        const {follow,trends,url,cover}=this.state;
        // console.log(follow,trends,url,cover);

        return(
            <>
                {/**********************发表动态********************/}
                <sapn onClick={()=>{
                    document.querySelector(".ra_trend_add_type").style.display="flex"
                }} className={"ra_trend_add iconfont iconjiahao"}>
                </sapn>
                {/*********************选择动态类型********************/}
                <div onClick={(e)=>{
                    if(e.target===document.querySelector(".ra_trend_add_type"))
                        e.target.style.display="none"
                }} style={{display:"none"}} className={"ra_trend_add_type"}>
                    <Link to={"/addTrends/asd/kgkh"}><span className={"iconfont iconxie"}></span></Link>
                    <Link to={"/addVideo"}><span className={"iconfont iconshipin"}></span></Link>
                </div>
                {/*************************发动态************************/}

                {/**************************发视频*****************************/}
                <div>

                </div>
                {/****************我的关注************************/}
                <div className={"ra_box"} >
                    <p onClick={()=>{
                        this.props.history.push("/allFollow")
                    }}>我关注的他们 ></p>
                    <ul>
                        {
                            follow?follow.map((v,i)=>(
                                <li onClick={()=>{
                                    this.props.history.push("/userInfo/"+v.userId);
                                }}>
                                    <div><img src={v.avatarUrl}/></div>
                                    <h2>{v.nickname}</h2>
                                </li>
                            )):[]
                        }
                    </ul>
                </div>

                {/********************动态*****************/}
                <div onClick={(e)=>{
                    if(document.querySelector(".ra_trendIn_delete").style.display==="block"){
                        document.querySelector(".ra_trendIn_delete").style.display="none";
                    }

                }} className={"ra_box1_out"}>
                    {
                        trends?trends.map((v,i)=>{
                            const json=JSON.parse(v.json);
                            // console.log(json);
                            let type;//动态类型
                            switch (v.type) {
                                case 22:type="转发";break;
                                case 39:type="发布视频";break;
                                case 35:type="";break;
                                case 18:type="分享单曲";break;
                                case 17:type="分享电台节目";break;
                            }

                            const event=v.json?this.getJson(v.json).event:"";
                            const json1=event?this.getJson(event.json):"";
                            const bground={
                                background: `url(${json.video?json.video.coverUrl:""})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "0 0"
                            };
                            const bground1={
                                background: `url(${json1?json1.video?json1.video.coverUrl:"":""})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "0 0"
                            };
                            return(
                                <div onClick={()=>{
                                    this.props.history.push("/trendDetails/"+v.info.threadId);
                                }} className={"ra_box1"}>
                                    <div className={"ra_box1in"}>
                                        <div onClick={(e)=>{
                                            e.stopPropagation();
                                            this.props.history.push("/userInfo/"+v.user.userId)
                                        }} className={"ra_Avatar"}>
                                            <img src={v.user.avatarUrl}/>
                                        </div>
                                        <div className={"ra_Content"}>
                                            <div className={"ra_Content_1"}>
                                                <p><Link className={"ra_Content_userName"} to={"/userInfo"}>{v.user.nickname} </Link><span>{type}:</span></p>
                                                <h2>{getTrendTime(v.eventTime)}</h2>
                                            </div>
                                            {/************中间内容**************/}
                                            <div className={"ra_Content_2"}>
                                                {/************文字**************/}
                                                <div className={"ra_Content_2_word"}>{json.msg}</div>
                                                {/************图片**************/}
                                                <div className={"ra_Content_2_1img"} style={{display:v.pics.length>0?"block":"none"}}>
                                                    {
                                                        v.pics?v.pics.map((v1,i)=>(
                                                            <img className={this.getClassName(v.pics.length,i)} src={v1.originUrl} alt=""/>
                                                        )):[]
                                                    }

                                                </div>
                                                {/************视频**************/}
                                                <div className={"ra_Content_2_vedio_s"} style={{display:v.type===39?"block":"none"}}>
                                                    <video poster={"j.jpg"} style={bground} controls src={url[i]}></video>
                                                    <span className={"ra_Content_2_vedio_s_one iconfont iconyousanjiao-wangyiicon"}>{getPlayerTime(json.video?json.video.playTime:"")}</span>
                                                    <span className={"ra_Content_2_vedio_s_two"}>{getVideoLong(json.video?json.video.size:"")}</span>
                                                </div>
                                                {/************歌曲**************/}
                                                <div onClick={(e)=>{
                                                    e.stopPropagation();
                                                    this.props.history.push({
                                                        pathname:"/musicplaying",
                                                        state:{
                                                            id:json.song?json.song.id:""
                                                        }
                                                    })
                                                }} className={"ra_Content_2_song"} style={{display:v.type===18?"block":"none"}}>
                                                    <div className={"ra_Content_2_song_in"}>
                                                        <img src={cover[i]}/>
                                                        <span className={"iconfont iconicon-"}></span>
                                                        <div>
                                                            <p>{json.song?json.song.name:""}</p>
                                                            <h2>{
                                                                json.song?json.song.artists.map((v2,i)=>(
                                                                    v2.name
                                                                )):[]
                                                            }</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/************电台**************/}
                                                <div className={"ra_Content_2_song"} style={{display:v.type===17?"block":"none"}}>
                                                    <div className={"ra_Content_2_song_in"}>
                                                        <img src={json.program?json.program.coverUrl:""}/>
                                                        <div>
                                                            <p>{json.program?json.program.description:""}</p>
                                                            <h2><span>{json.program?json.program.radio.category:""}</span>{json.program?json.program.radio.name:""}</h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/****************************转发********************************/}
                                                <div className={"ra_zhuanfa"} style={{display:v.type===22?"block":"none"}}>

                                                    <div className={"ra_box1"}>
                                                        <div className={"ra_box1in"}>
                                                            <div onClick={()=>{
                                                                this.props.history.push("/userInfo/"+event?event.user.userId:"")
                                                            }} className={"ra_Avatar"}>
                                                                <img src={event?event.user.avatarUrl:""}/>
                                                            </div>
                                                            <div className={"ra_Content"}>
                                                                <div className={"ra_Content_1"}>
                                                                    <p><Link className={"ra_Content_userName"} to={"/userInfo"}>{event?event.user.nickname:""} </Link><span>{this.getType(event?event.type:"")}:</span></p>
                                                                </div>
                                                                {/************中间内容**************/}
                                                                <div className={"ra_Content_2"}>
                                                                    {/************文字**************/}
                                                                    <div className={"ra_Content_2_word"}>{json1?json1.msg:""}</div>
                                                                    {/************图片**************/}
                                                                    <div className={"ra_Content_2_1img"} style={{display:(event?event.pics:"").length>0?"block":"none"}}>
                                                                        {
                                                                            event?event.pics?event.pics.map((v1,i)=>(
                                                                                <img className={this.getClassName(event?event.pics.length:"",i)} src={v1.originUrl} alt=""/>
                                                                            )):[]:[]
                                                                        }

                                                                    </div>
                                                                    {/************视频**************/}
                                                                    <div className={"ra_Content_2_vedio_s"} style={{display:(event?event.type:"")===39?"block":"none"}}>
                                                                        <video poster={"j.jpg"} style={bground1} controls src={""}></video>
                                                                        <span className={"ra_Content_2_vedio_s_one iconfont iconyousanjiao-wangyiicon"}>{getPlayerTime(json1?json1.video?json1.video.playTime:"":"")}</span>
                                                                        <span className={"ra_Content_2_vedio_s_two"}>{getVideoLong(json1?json1.video?json1.video.size:"":"")}</span>
                                                                    </div>
                                                                    {/************歌曲**************/}
                                                                    <div className={"ra_Content_2_song"} style={{display:(event?event.type:"")===18?"block":"none"}}>
                                                                        <div className={"ra_Content_2_song_in"}>
                                                                            <img src={json1?json1.song?json1.song.album.picUrl:"":""}/>
                                                                            <span className={"iconfont iconicon-"}></span>
                                                                            <div>
                                                                                <p>{json1?json1.song?json1.song.name:"":""}</p>
                                                                                <h2>{
                                                                                    json1?json1.song?json1.song.artists.map((v2,i)=>(
                                                                                        v2.name
                                                                                    )):[]:[]
                                                                                }</h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/************电台**************/}
                                                                    <div className={"ra_Content_2_song"} style={{display:(event?event.type:"")===17?"block":"none"}}>
                                                                        <div className={"ra_Content_2_song_in"}>
                                                                            <img src={json1?json1.program?json1.program.coverUrl:"":""}/>
                                                                            <div>
                                                                                <p>{json1?json1.program?json1.program.description:"":""}</p>
                                                                                <h2><span>{json1?json1.program?json1.program.radio.category:"":""}</span>{json1?json1.program?json1.program.radio.name:"":""}</h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/****************************转发********************************/}
                                                                    <div style={{display:v.type===22?"block":"none"}}>


                                                                    </div>
                                                                    {/*****************************转发*******************************/}


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/*****************************转发*******************************/}


                                            </div>
                                            <div style={{display:v.rcmdInfo?v.rcmdInfo.reason?"block":"none":"none"}}  className={"ra_Content_origin"}>——{v.rcmdInfo?v.rcmdInfo.reason:""}</div>
                                            <div  className={"ra_Content_3"}>
                                                <div style={{color:v.info?v.info.liked?"red":"#8b8585":"#8b8585"}} onClick={this.props.resourceLike.bind(this,{type:6,threadId:v.info?v.info.threadId:"",t:v.info?v.info.liked?"0":"1":""})} className={"ra_Content_3_like"}><span className={"iconfont iconthumb"}></span><span>{v.info?v.info.likedCount:""}</span></div>

                                                <div className={"ra_Content_3_com"}><span className={"iconfont iconicon_comments"}></span><span>{v.info?v.info.commentCount:""}</span></div>

                                                <div onClick={(e)=>{
                                                    e.stopPropagation();
                                                    this.props.history.push("/relayTrends/"+v.id+"/"+(v.user?v.user.userId:""))}
                                                } className={"ra_Content_3_share"}><span className={"iconfont iconforward"}><span>{v.info?v.info.shareCount:""}</span></span></div>

                                                <div  onClick={(e)=>{
                                                    e.stopPropagation();
                                                    console.log("das");
                                                    document.querySelector(".ra_trendIn_delete").style.display="block";
                                                    document.querySelector(".ra_trendIn_delete").setAttribute("comId",v.id);
                                                }}  className={"ra_Content_3_more"}><span className={"iconfont icondiandiandian"}></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }):[]
                    }
                    {/**********************************************/}
                </div>
                <div onClick={()=>{
                    alert("举报成功")
                }} style={{display:"none"}} className={"ra_trendIn_delete"}>举报</div>
            </>
        )
    }

    getJson(data){
        return JSON.parse(data);
    }

    getType(ty){
        let type;//动态类型
        switch (ty) {
            case 22:type="转发";break;
            case 39:type="发布视频";break;
            case 35:type="";break;
            case 18:type="分享单曲";break;
            case 17:type="分享电台节目";break;
        }
        return type;
    }
    getClassName(length,i){//数组长度，数组索引
        let className;
        switch (length) {
            case 1:className="pubimg";break;
            case 2:className="pubimg2";break;
            case 3:className="pubimg3";break;
            case 4:className="pubimg4";break;
            case 5:className="pubimg5"+i;break;
            case 6:className="pubimg6";break;
            case 7:className="pubimg7"+i;break;
            case 8:className="pubimg8";break;
            case 9:className="pubimg9";break;
        }
        return className;
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            follow:nextProps.trend.follow,
            trends:nextProps.trend.trends,
            url:nextProps.trend.url,
            cover:nextProps.trend.cover
        })
    }

    componentDidMount() {
        // console.log("componentDidMount");
        let {page}=this.state;
        // console.log(page);
        this.props.getTrend.bind(this,page)().then(()=>{
            // console.log(this);
            this.setState({
                isLoading:false
            });
            let onScroll = new BScroll(".ra_ui-tab-content", {
                click:true,
                tap:true,
                probeType: 2,
                pullDownRefresh: {
                    threshold: 50,
                    stop: 20
                },
                //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
                //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
                pullUpLoad: {
                    threshold: 10
                },
                mouseWheel: {    // pc端同样能滑动
                    speed: 20,
                    invert: false
                },
                useTransition:false  // 防止iphone微信滑动卡顿
            });
            BScroll.prototype.me=this;
            onScroll.on("pullingDown",function(){
                console.log("pullingDown");
                this.me.props.getTrend.bind(this.me,1)();
                onScroll.finishPullDown();//可以多次执行上拉刷新
            });
            onScroll.on("pullingUp",function(){
                //alert('已到最底部');
                page++;
                console.log(page);
                console.log('加载ajax数据');
                console.log(this.me);
                this.me.setState({
                    page
                });
                this.me.props.getTrend.bind(this.me,page)();
                onScroll.finishPullUp();//可以多次执行上拉刷新
            });
            onScroll.refresh();
        })
    }
}

export default connect(state=>({trend:state.trend.trend}),dispatch=>bindActionCreators(trendCreator,dispatch))(TrendIn);